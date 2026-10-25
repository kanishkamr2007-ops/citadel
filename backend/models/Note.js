const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  title: {
    type: String,
    required: [true, 'Note title is required'],
    trim: true
  },
  category: {
    type: String,
    default: 'Personal',
    enum: ['Education', 'Finance', 'Work', 'Personal']
  },
  categoryIcon: {
    type: String,
    default: '📝'
  },
  color: {
    type: String,
    default: 'indigo'
  },
  content: {
    type: String,
    default: ''
  },
  preview: {
    type: String,
    default: ''
  },
  tags: {
    type: [String],
    default: ['Encrypted']
  },
  lastUpdated: {
    type: String,
    default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
