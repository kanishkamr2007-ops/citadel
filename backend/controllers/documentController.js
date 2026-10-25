const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Document = require('../models/Document');
const Trash = require('../models/Trash');
const Activity = require('../models/Activity');
const { encryptBuffer, decryptBuffer } = require('../utils/crypto');

const DOCS_BASE_DIR = path.resolve(__dirname, '..', 'uploads', 'documents');
if (!fs.existsSync(DOCS_BASE_DIR)) {
  fs.mkdirSync(DOCS_BASE_DIR, { recursive: true });
}

function getDocumentCategoryIcon(cat) {
  switch (cat) {
    case 'Certificates': return '📜';
    case 'IDs': return '🪪';
    case 'Academic': return '🎓';
    case 'Work': return '💼';
    case 'Personal': return '👤';
    default: return '📄';
  }
}

function getMimeType(filename, defaultMime = 'application/octet-stream') {
  const ext = (path.extname(filename || '')).replace('.', '').toLowerCase();
  const mimeMap = {
    pdf: 'application/pdf',
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    gif: 'image/gif',
    svg: 'image/svg+xml',
    txt: 'text/plain; charset=utf-8',
    csv: 'text/csv; charset=utf-8',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xls: 'application/vnd.ms-excel',
    zip: 'application/zip'
  };
  return mimeMap[ext] || defaultMime || 'application/octet-stream';
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getSafeDiskPath(filename) {
  const safeFilename = path.basename(filename);
  const resolved = path.resolve(DOCS_BASE_DIR, safeFilename);
  if (!resolved.startsWith(DOCS_BASE_DIR)) {
    throw new Error('Access denied: Path traversal detected');
  }
  return { safeFilename, resolvedPath: resolved };
}

// @desc    Get all documents for the authenticated user
// @route   GET /api/documents
exports.getDocuments = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = { userId: req.user._id };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      const searchRegex = { $regex: search, $options: 'i' };
      query.$or = [{ name: searchRegex }, { description: searchRegex }];
    }

    const documents = await Document.find(query).sort({ createdAt: -1 });
    const docs = documents.map(d => {
      const obj = d.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    return res.json({ success: true, count: docs.length, documents: docs });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get document by ID
// @route   GET /api/documents/:id
exports.getDocumentById = async (req, res) => {
  try {
    const docId = req.params.id;
    let doc;
    if (mongoose.Types.ObjectId.isValid(docId)) {
      doc = await Document.findOne({ _id: docId, userId: req.user._id });
    } else {
      doc = await Document.findOne({ $or: [{ id: docId }, { originalFilename: docId }], userId: req.user._id });
    }

    if (!doc) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }
    const docObj = doc.toObject();
    docObj.id = docObj._id.toString();
    return res.json({ success: true, document: docObj });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Upload / add encrypted document with binary payload
// @route   POST /api/documents
exports.createDocument = async (req, res) => {
  try {
    const { name, category, description, size, sizeBytes, fileType, fileData, tags } = req.body;

    if (!name || name.trim() === '') {
      return res.status(400).json({ success: false, message: 'Document name is required.' });
    }

    const safeFilename = path.basename(name.trim());
    const cat = category || 'Personal';
    const ext = (path.extname(safeFilename) || '').replace('.', '').toLowerCase() || (fileType || 'pdf').toLowerCase();

    let detectedMime = getMimeType(safeFilename);
    let uniqueStorageName = '';
    let isEncrypted = false;
    let iv = '';
    let authTag = '';
    let originalSizeBytes = sizeBytes || 0;
    let originalSizeStr = size || '0 KB';
    let originalSha256 = '';

    if (fileData && typeof fileData === 'string' && fileData.trim() !== '') {
      // Decode Base64 data URL or raw Base64 string directly to binary buffer
      let originalBuffer;
      const matches = fileData.match(/^data:([A-Za-z0-9-+\/.]+);base64,(.+)$/);
      if (matches) {
        detectedMime = matches[1];
        originalBuffer = Buffer.from(matches[2], 'base64');
      } else {
        originalBuffer = Buffer.from(fileData, 'base64');
      }

      if (!originalBuffer || originalBuffer.length === 0) {
        return res.status(400).json({ success: false, message: 'Decoded document payload is empty.' });
      }

      // Verify PDF signature starts with %PDF-
      if (ext === 'pdf' || detectedMime === 'application/pdf') {
        const headerSignature = originalBuffer.toString('utf-8', 0, 5);
        if (headerSignature !== '%PDF-') {
          return res.status(400).json({
            success: false,
            message: 'Invalid PDF format: File header does not match %PDF- specification.'
          });
        }
      }

      originalSizeBytes = originalBuffer.length;
      originalSizeStr = formatFileSize(originalSizeBytes);
      originalSha256 = crypto.createHash('sha256').update(originalBuffer).digest('hex');

      // Encrypt the original file buffer using military-grade AES-256-GCM
      const encrypted = encryptBuffer(originalBuffer);
      isEncrypted = true;
      iv = encrypted.iv;
      authTag = encrypted.authTag;

      // Create unique safe storage filename in uploads/documents/
      uniqueStorageName = `doc-${req.user._id}-${Date.now()}-${safeFilename.replace(/[^a-zA-Z0-9._-]/g, '_')}.enc`;
      const { resolvedPath } = getSafeDiskPath(uniqueStorageName);

      // Write AES-256-GCM encrypted binary data to disk
      fs.writeFileSync(resolvedPath, encrypted.encryptedBuffer);
    }

    const doc = await Document.create({
      userId: req.user._id,
      name: safeFilename,
      originalFilename: safeFilename,
      category: cat,
      categoryName: cat,
      categoryIcon: getDocumentCategoryIcon(cat),
      fileType: ext,
      mimeType: detectedMime,
      filePath: uniqueStorageName,
      isEncrypted,
      encryptionIv: iv,
      encryptionAuthTag: authTag,
      size: originalSizeStr,
      sizeBytes: originalSizeBytes,
      encryptedSha256: originalSha256,
      description: description || 'Encrypted document stored safely in locker.',
      tags: tags || ['Uploaded', 'AES-256-GCM']
    });

    await Activity.create({
      userId: req.user._id,
      type: 'document',
      icon: '📁',
      color: 'emerald',
      title: `Uploaded "${doc.name}"`,
      description: `Encrypted file stored in ${doc.category} category (${doc.size}).`,
      category: 'Documents'
    });

    const docObj = doc.toObject();
    docObj.id = docObj._id.toString();

    return res.status(201).json({
      success: true,
      message: `"${safeFilename}" encrypted and added to Locker!`,
      document: docObj
    });
  } catch (error) {
    console.error('Create document error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Download document (binary-safe streaming with AES-256-GCM decryption)
// @route   GET /api/documents/:id/download
exports.downloadDocument = async (req, res) => {
  try {
    const docId = req.params.id;
    let doc;
    if (mongoose.Types.ObjectId.isValid(docId)) {
      doc = await Document.findOne({ _id: docId, userId: req.user._id });
    } else {
      doc = await Document.findOne({ $or: [{ id: docId }, { originalFilename: docId }], userId: req.user._id });
    }

    if (!doc) {
      return res.status(404).json({ success: false, message: 'Document not found or access unauthorized.' });
    }

    if (!doc.filePath) {
      return res.status(404).json({ success: false, message: 'Original document file is missing or was never stored.' });
    }

    let resolvedPath;
    try {
      const safeInfo = getSafeDiskPath(doc.filePath);
      resolvedPath = safeInfo.resolvedPath;
    } catch (pathErr) {
      return res.status(403).json({ success: false, message: 'Access denied: Path traversal detected.' });
    }

    if (!fs.existsSync(resolvedPath)) {
      return res.status(404).json({
        success: false,
        message: 'Original document file is missing from secure storage.'
      });
    }

    const storedBuffer = fs.readFileSync(resolvedPath);
    if (!storedBuffer || storedBuffer.length === 0) {
      return res.status(404).json({ success: false, message: 'Stored document file on disk is empty.' });
    }

    let originalBuffer;
    if (doc.isEncrypted && doc.encryptionIv && doc.encryptionAuthTag) {
      try {
        originalBuffer = decryptBuffer(storedBuffer, doc.encryptionIv, doc.encryptionAuthTag);
      } catch (decErr) {
        console.error(`Decryption failed for doc ${doc._id}:`, decErr.message);
        return res.status(500).json({
          success: false,
          message: 'Cryptographic decryption failed: Data corruption or integrity check failure.'
        });
      }
    } else {
      // Unencrypted legacy document
      originalBuffer = storedBuffer;
    }

    const safeFilename = path.basename(doc.originalFilename || doc.name || 'document.pdf');
    const ext = (path.extname(safeFilename) || '').replace('.', '').toLowerCase() || doc.fileType || 'pdf';

    // Verify original PDF signature begins with %PDF-
    if (ext === 'pdf' || (doc.mimeType && doc.mimeType === 'application/pdf')) {
      const headerSignature = originalBuffer.toString('utf-8', 0, 5);
      if (headerSignature !== '%PDF-') {
        return res.status(500).json({
          success: false,
          message: 'Decryption anomaly: Decrypted document does not start with valid %PDF- signature.'
        });
      }
    }

    // Verify SHA-256 hash matches the original uploaded file
    if (doc.encryptedSha256) {
      const decryptedHash = crypto.createHash('sha256').update(originalBuffer).digest('hex');
      if (decryptedHash !== doc.encryptedSha256) {
        console.warn(`SHA-256 mismatch for doc ${doc._id}: expected ${doc.encryptedSha256}, got ${decryptedHash}`);
      }
    }

    const mime = doc.mimeType || getMimeType(safeFilename);

    // Set binary response headers
    res.setHeader('Content-Type', mime);
    res.setHeader('Content-Length', originalBuffer.length);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${encodeURIComponent(safeFilename)}"; filename*=UTF-8''${encodeURIComponent(safeFilename)}`
    );
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    return res.end(originalBuffer);
  } catch (error) {
    console.error('Error downloading document:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    View document inline in browser (e.g. for PDFs and images)
// @route   GET /api/documents/:id/view
exports.viewDocument = async (req, res) => {
  try {
    const docId = req.params.id;
    let doc;
    if (mongoose.Types.ObjectId.isValid(docId)) {
      doc = await Document.findOne({ _id: docId, userId: req.user._id });
    } else {
      doc = await Document.findOne({ $or: [{ id: docId }, { originalFilename: docId }], userId: req.user._id });
    }

    if (!doc) {
      return res.status(404).json({ success: false, message: 'Document not found or access unauthorized.' });
    }

    if (!doc.filePath) {
      return res.status(404).json({ success: false, message: 'Original document file is missing or was never stored.' });
    }

    let resolvedPath;
    try {
      const safeInfo = getSafeDiskPath(doc.filePath);
      resolvedPath = safeInfo.resolvedPath;
    } catch (pathErr) {
      return res.status(403).json({ success: false, message: 'Access denied: Path traversal detected.' });
    }

    if (!fs.existsSync(resolvedPath)) {
      return res.status(404).json({
        success: false,
        message: 'Original document file is missing from secure storage.'
      });
    }

    const storedBuffer = fs.readFileSync(resolvedPath);
    if (!storedBuffer || storedBuffer.length === 0) {
      return res.status(404).json({ success: false, message: 'Stored document file on disk is empty.' });
    }

    let originalBuffer;
    if (doc.isEncrypted && doc.encryptionIv && doc.encryptionAuthTag) {
      try {
        originalBuffer = decryptBuffer(storedBuffer, doc.encryptionIv, doc.encryptionAuthTag);
      } catch (decErr) {
        return res.status(500).json({
          success: false,
          message: 'Cryptographic decryption failed: Data corruption or integrity check failure.'
        });
      }
    } else {
      originalBuffer = storedBuffer;
    }

    const safeFilename = path.basename(doc.originalFilename || doc.name || 'document.pdf');
    const ext = (path.extname(safeFilename) || '').replace('.', '').toLowerCase() || doc.fileType || 'pdf';

    if (ext === 'pdf' || (doc.mimeType && doc.mimeType === 'application/pdf')) {
      const headerSignature = originalBuffer.toString('utf-8', 0, 5);
      if (headerSignature !== '%PDF-') {
        return res.status(500).json({
          success: false,
          message: 'Decryption anomaly: Decrypted document does not start with valid %PDF- signature.'
        });
      }
    }

    const mime = doc.mimeType || getMimeType(safeFilename);

    res.setHeader('Content-Type', mime);
    res.setHeader('Content-Length', originalBuffer.length);
    res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(safeFilename)}"`);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    return res.end(originalBuffer);
  } catch (error) {
    console.error('Error viewing document:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Rename/update document
// @route   PUT /api/documents/:id
exports.updateDocument = async (req, res) => {
  try {
    const { name, category, description, tags } = req.body;
    const doc = await Document.findOne({ _id: req.params.id, userId: req.user._id });

    if (!doc) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }

    if (name) {
      doc.name = path.basename(name.trim());
      doc.originalFilename = doc.name;
    }
    if (category) {
      doc.category = category;
      doc.categoryName = category;
      doc.categoryIcon = getDocumentCategoryIcon(category);
    }
    if (description !== undefined) doc.description = description;
    if (tags !== undefined) doc.tags = tags;

    await doc.save();

    const docObj = doc.toObject();
    docObj.id = docObj._id.toString();

    return res.json({ success: true, message: 'Document updated successfully.', document: docObj });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.renameDocument = exports.updateDocument;

// @desc    Delete document (move to Trash)
// @route   DELETE /api/documents/:id
exports.deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findOne({ _id: req.params.id, userId: req.user._id });
    if (!doc) {
      return res.status(404).json({ success: false, message: 'Document not found' });
    }

    const docObj = doc.toObject();
    docObj.id = docObj._id.toString();

    await Trash.create({
      userId: req.user._id,
      originalId: doc._id.toString(),
      itemType: 'document',
      title: doc.name,
      originalCategory: doc.category,
      deletedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      daysRemaining: 30,
      data: docObj
    });

    await Document.findByIdAndDelete(doc._id);

    await Activity.create({
      userId: req.user._id,
      type: 'document',
      icon: '🗑️',
      color: 'rose',
      title: `Moved "${doc.name}" to Trash`,
      description: 'Document archived in Trash.',
      category: 'Documents'
    });

    return res.json({ success: true, message: `"${doc.name}" moved to Trash.` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
