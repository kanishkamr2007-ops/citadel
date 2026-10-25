const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  title: {
    type: String,
    required: [true, 'Application or Website title is required'],
    trim: true,
    index: true
  },
  url: {
    type: String,
    default: ''
  },
  domain: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    required: [true, 'Username or Email identifier is required'],
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Encrypted secret is required']
  },
  category: {
    type: String,
    default: 'Other',
    enum: ['Social', 'Education', 'Work', 'Shopping', 'Finance', 'Other']
  },
  accountType: {
    type: String,
    default: 'Personal' // e.g. Personal, Business, College, Team
  },
  tags: {
    type: [String],
    default: []
  },
  notes: {
    type: String,
    default: ''
  },
  strength: {
    type: String,
    default: 'strong'
  },
  strengthScore: {
    type: Number,
    default: 90
  },
  isReused: {
    type: Boolean,
    default: false
  },
  isCompromised: {
    type: Boolean,
    default: false
  },
  isFavorite: {
    type: Boolean,
    default: false
  },
  favIcon: {
    type: String,
    default: '🔑'
  },
  brandColor: {
    type: String,
    default: '#6366F1'
  },
  lastUpdated: {
    type: String,
    default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Account', AccountSchema);
