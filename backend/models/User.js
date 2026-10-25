const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: [true, 'Master Password is required']
  },
  role: {
    type: String,
    default: 'Vault Master & Cybersecurity Analyst'
  },
  avatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'
  },
  joinedDate: {
    type: String,
    default: () => new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  },
  lastLogin: {
    type: String,
    default: 'Today, 10:32 AM'
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  },
  twoFactorSecret: {
    type: String,
    default: 'JBSWY3DPEHPK3PXP'
  },
  emergencyKey: {
    type: String,
    default: () => 'CTDL-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000) + '-K9X2-M041-SECURE'
  },
  recoveryEmail: {
    type: String,
    default: ''
  },
  settings: {
    theme: { type: String, default: 'dark' },
    autoLockTimeout: { type: String, default: '15' },
    clipboardClearTimeout: { type: String, default: '30' },
    twoFactorEnabled: { type: Boolean, default: false },
    loginAlertsEnabled: { type: Boolean, default: true },
    biometricUnlockEnabled: { type: Boolean, default: true },
    passphraseGeneratorDefaultLength: { type: Number, default: 16 },
    defaultLanguage: { type: String, default: 'English (US)' },
    activeSessions: [
      {
        id: String,
        device: String,
        location: String,
        ip: String,
        isCurrent: Boolean,
        lastActive: String
      }
    ]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
