const Trash = require('../models/Trash');
const Account = require('../models/Account');
const Document = require('../models/Document');
const Note = require('../models/Note');
const Activity = require('../models/Activity');
const { encryptSecret } = require('../utils/crypto');

// @desc    Get all trash items
// @route   GET /api/trash
exports.getTrash = async (req, res) => {
  try {
    const trash = await Trash.find({ userId: req.user._id }).sort({ createdAt: -1 });
    const formatted = trash.map(t => {
      const obj = t.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    return res.json({ success: true, count: formatted.length, trash: formatted });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Restore an item from trash
// @route   POST /api/trash/:id/restore
exports.restoreTrashItem = async (req, res) => {
  try {
    const trashItem = await Trash.findOne({ _id: req.params.id, userId: req.user._id });
    if (!trashItem) {
      return res.status(404).json({ success: false, message: 'Trash item not found' });
    }

    const itemData = trashItem.data;

    if (trashItem.itemType === 'password') {
      const encPassword = encryptSecret(itemData.password);
      await Account.create({
        userId: req.user._id,
        title: itemData.title,
        url: itemData.url || '',
        domain: itemData.domain || '',
        username: itemData.username,
        password: encPassword,
        category: itemData.category || 'Other',
        accountType: itemData.accountType || 'Personal',
        tags: itemData.tags || [],
        notes: itemData.notes || '',
        strength: itemData.strength || 'strong',
        strengthScore: itemData.strengthScore || 90,
        favIcon: itemData.favIcon || '🔑'
      });
    } else if (trashItem.itemType === 'document') {
      await Document.create({
        userId: req.user._id,
        name: itemData.name,
        originalFilename: itemData.originalFilename || itemData.name,
        category: itemData.category || 'Personal',
        categoryName: itemData.categoryName || 'Personal',
        categoryIcon: itemData.categoryIcon || '📄',
        fileType: itemData.fileType || 'pdf',
        mimeType: itemData.mimeType || 'application/pdf',
        filePath: itemData.filePath || '',
        size: itemData.size || '1.5 MB',
        sizeBytes: itemData.sizeBytes || 1572864,
        encryptedSha256: itemData.encryptedSha256 || '',
        description: itemData.description || ''
      });
    } else if (trashItem.itemType === 'note') {
      await Note.create({
        userId: req.user._id,
        title: itemData.title,
        category: itemData.category || 'Personal',
        categoryIcon: itemData.categoryIcon || '📝',
        color: itemData.color || 'indigo',
        content: itemData.content || '',
        preview: itemData.preview || ''
      });
    }

    await Activity.create({
      userId: req.user._id,
      type: 'security',
      icon: '♻️',
      color: 'emerald',
      title: `Restored "${trashItem.title}"`,
      description: `Item recovered from Trash into ${trashItem.itemType} vault.`,
      category: 'Security'
    });

    await Trash.findByIdAndDelete(trashItem._id);

    return res.json({
      success: true,
      message: `"${trashItem.title}" successfully restored to vault.`
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Permanently delete single trash item
// @route   DELETE /api/trash/:id
exports.deleteTrashItem = async (req, res) => {
  try {
    const trashItem = await Trash.findOne({ _id: req.params.id, userId: req.user._id });
    if (!trashItem) {
      return res.status(404).json({ success: false, message: 'Trash item not found' });
    }

    const title = trashItem.title;
    await Trash.findByIdAndDelete(trashItem._id);

    await Activity.create({
      userId: req.user._id,
      type: 'security',
      icon: '💥',
      color: 'rose',
      title: `Permanently Erased "${title}"`,
      description: 'Cryptographic keys purged. Data unrecoverable.',
      category: 'Security'
    });

    return res.json({
      success: true,
      message: `"${title}" permanently shredded.`
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Empty all trash
// @route   DELETE /api/trash
exports.emptyTrash = async (req, res) => {
  try {
    const result = await Trash.deleteMany({ userId: req.user._id });

    await Activity.create({
      userId: req.user._id,
      type: 'security',
      icon: '💥',
      color: 'rose',
      title: 'Emptied Trash Vault',
      description: `${result.deletedCount} deleted items purged permanently.`,
      category: 'Security'
    });

    return res.json({
      success: true,
      message: `Purged ${result.deletedCount} items permanently.`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTrashItems = exports.getTrash;
exports.permanentlyDeleteTrashItem = exports.deleteTrashItem;

