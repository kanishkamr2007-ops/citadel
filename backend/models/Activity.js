const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  type: {
    type: String,
    default: 'security'
  },
  icon: {
    type: String,
    default: '🛡️'
  },
  color: {
    type: String,
    default: 'indigo'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'Security'
  },
  time: {
    type: String,
    default: 'Just now'
  },
  device: {
    type: String,
    default: 'Chrome on Windows 11'
  },
  ip: {
    type: String,
    default: '127.0.0.1'
  },
  status: {
    type: String,
    default: 'success'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', ActivitySchema);
