const mongoose = require('mongoose');

const TrashSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  originalId: {
    type: String,
    required: true
  },
  itemType: {
    type: String,
    enum: ['password', 'document', 'note'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  originalCategory: {
    type: String,
    default: 'General'
  },
  deletedDate: {
    type: String,
    default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  },
  daysRemaining: {
    type: Number,
    default: 30
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Trash', TrashSchema);
