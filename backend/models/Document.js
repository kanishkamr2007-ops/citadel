const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: [true, 'Document name is required'],
    trim: true
  },
  originalFilename: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    default: 'Personal',
    enum: ['Certificates', 'IDs', 'Academic', 'Work', 'Personal', 'Other']
  },
  categoryName: {
    type: String,
    default: 'Personal'
  },
  categoryIcon: {
    type: String,
    default: '📄'
  },
  fileType: {
    type: String,
    default: 'pdf'
  },
  mimeType: {
    type: String,
    default: 'application/pdf'
  },
  filePath: {
    type: String,
    default: ''
  },
  isEncrypted: {
    type: Boolean,
    default: false
  },
  encryptionIv: {
    type: String,
    default: ''
  },
  encryptionAuthTag: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '1.2 MB'
  },
  sizeBytes: {
    type: Number,
    default: 1258291
  },
  uploadedDate: {
    type: String,
    default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  },
  encryptedSha256: {
    type: String,
    default: () => require('crypto').randomBytes(32).toString('hex')
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    default: ''
  },
  tags: {
    type: [String],
    default: ['Encrypted']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Document', DocumentSchema);
