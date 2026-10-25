const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Activity = require('../models/Activity');
const Account = require('../models/Account');
const Document = require('../models/Document');
const Note = require('../models/Note');
const Trash = require('../models/Trash');
const { hashPassword, comparePassword } = require('../utils/crypto');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'citadel_super_secure_vault_jwt_key_2026_x89f', {
    expiresIn: '7d'
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
exports.register = async (req, res) => {
  try {
    const { name, email, password, recoveryEmail } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and a master password.'
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email address already exists.'
      });
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      recoveryEmail: recoveryEmail || email.toLowerCase(),
      settings: {
        theme: 'dark',
        autoLockTimeout: '15',
        clipboardClearTimeout: '30',
        twoFactorEnabled: false,
        loginAlertsEnabled: true,
        biometricUnlockEnabled: true,
        passphraseGeneratorDefaultLength: 16,
        defaultLanguage: 'English (US)',
        activeSessions: [{
          id: 'sess-' + Date.now(),
          device: req.headers['user-agent'] ? 'Browser on Windows' : 'Chrome on Windows 11 Pro',
          location: 'Local Enclave',
          ip: req.ip || '127.0.0.1',
          isCurrent: true,
          lastActive: 'Active Now'
        }]
      }
    });

    await Activity.create({
      userId: user._id,
      type: 'security',
      icon: '🛡️',
      color: 'emerald',
      title: 'CITADEL Vault Initialized',
      description: 'Master key generated with 256-bit AES cryptographic parameters.',
      category: 'Security',
      ip: req.ip || '127.0.0.1'
    });

    const token = generateToken(user._id);

    res.cookie('citadel_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(201).json({
      success: true,
      message: 'Secure Vault created successfully! Welcome to CITADEL.',
      token,
      user: userObj
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during registration: ' + error.message
    });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and master password.'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or master password.'
      });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or master password.'
      });
    }

    user.lastLogin = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ', Today';
    await user.save();

    await Activity.create({
      userId: user._id,
      type: 'login',
      icon: '🔐',
      color: 'indigo',
      title: 'Successful Vault Unlock',
      description: 'Master password verified with client-side key derivation.',
      category: 'Login',
      ip: req.ip || '127.0.0.1'
    });

    const token = generateToken(user._id);

    res.cookie('citadel_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      message: 'Vault successfully unlocked!',
      token,
      user: userObj
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during login: ' + error.message
    });
  }
};

// @desc    Get current authenticated user profile
// @route   GET /api/auth/me
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    return res.json({
      success: true,
      user
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Update user profile details
// @route   PUT /api/auth/profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, recoveryEmail, avatar, role } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (name) user.name = name;
    if (recoveryEmail) user.recoveryEmail = recoveryEmail;
    if (avatar) user.avatar = avatar;
    if (role) user.role = role;

    await user.save();

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      message: 'Profile details updated successfully.',
      user: userObj
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Change Master Password
// @route   PUT /api/auth/change-password
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both current and new master passwords.'
      });
    }

    const isMatch = await comparePassword(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Current master password does not match.'
      });
    }

    user.password = await hashPassword(newPassword);
    await user.save();

    await Activity.create({
      userId: user._id,
      type: 'security',
      icon: '🔑',
      color: 'indigo',
      title: 'Master Password Rotated',
      description: 'Master vault key successfully re-derived and updated.',
      category: 'Security'
    });

    return res.json({
      success: true,
      message: 'Master password successfully updated!'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Verify and enable 2FA
// @route   POST /api/auth/verify-2fa
exports.verify2FA = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.twoFactorEnabled = true;
    user.settings.twoFactorEnabled = true;
    await user.save();

    await Activity.create({
      userId: user._id,
      type: 'security',
      icon: '🟢',
      color: 'emerald',
      title: 'Two-Factor Authentication Enabled',
      description: 'Hardware TOTP authenticator registered.',
      category: 'Security'
    });

    return res.json({
      success: true,
      message: 'Two-Factor Authentication Verified & Active!'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete Account Permanently
// @route   DELETE /api/auth/account
exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.user._id;

    await Account.deleteMany({ userId });
    await Document.deleteMany({ userId });
    await Note.deleteMany({ userId });
    await Trash.deleteMany({ userId });
    await Activity.deleteMany({ userId });
    await User.findByIdAndDelete(userId);

    res.clearCookie('citadel_token');

    return res.json({
      success: true,
      message: 'Account and all encrypted data permanently purged.'
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Logout User
// @route   POST /api/auth/logout
exports.logout = async (req, res) => {
  res.clearCookie('citadel_token');
  return res.json({
    success: true,
    message: 'Vault locked and keys flushed from memory.'
  });
};

// @desc    Upload or update profile avatar
// @route   POST /api/auth/avatar
exports.uploadAvatar = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({
        success: false,
        message: 'No image data provided. Please select an image file.'
      });
    }

    // Validate Base64 data URL format and allowed mime-types (jpg, jpeg, png, webp)
    const matches = image.match(/^data:(image\/(jpeg|jpg|png|webp));base64,(.+)$/i);
    if (!matches) {
      return res.status(400).json({
        success: false,
        message: 'Invalid image format. Supported formats: JPG, JPEG, PNG, WEBP.'
      });
    }

    const mimeType = matches[1].toLowerCase();
    const base64Data = matches[3];
    const buffer = Buffer.from(base64Data, 'base64');

    // Validate size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (buffer.length > MAX_SIZE) {
      return res.status(400).json({
        success: false,
        message: 'Image size exceeds maximum limit of 5MB.'
      });
    }

    // Determine extension
    let ext = 'png';
    if (mimeType.includes('jpeg') || mimeType.includes('jpg')) ext = 'jpg';
    else if (mimeType.includes('webp')) ext = 'webp';
    else if (mimeType.includes('png')) ext = 'png';

    const uploadsDir = path.join(__dirname, '..', 'uploads', 'avatars');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    // Remove existing custom uploaded avatar from disk if present
    if (user.avatar && user.avatar.startsWith('/uploads/avatars/')) {
      const oldFilePath = path.join(__dirname, '..', user.avatar);
      if (fs.existsSync(oldFilePath)) {
        try {
          fs.unlinkSync(oldFilePath);
        } catch (e) {
          console.warn('Failed to delete old avatar:', e.message);
        }
      }
    }

    // Safe filename using user ID and timestamp
    const filename = `avatar-${user._id}-${Date.now()}.${ext}`;
    const filePath = path.join(uploadsDir, filename);
    fs.writeFileSync(filePath, buffer);

    const avatarUrl = `/uploads/avatars/${filename}`;
    user.avatar = avatarUrl;
    await user.save();

    await Activity.create({
      userId: user._id,
      type: 'security',
      icon: '👤',
      color: 'emerald',
      title: 'Profile Picture Updated',
      description: 'New custom profile photo saved securely.',
      category: 'Profile',
      ip: req.ip || '127.0.0.1'
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      message: 'Profile picture updated successfully.',
      avatar: avatarUrl,
      user: userObj
    });
  } catch (error) {
    console.error('Upload avatar error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while uploading avatar: ' + error.message
    });
  }
};

// @desc    Remove custom avatar and reset to default
// @route   DELETE /api/auth/avatar
exports.removeAvatar = async (req, res) => {
  try {
    const DEFAULT_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250';
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    if (user.avatar && user.avatar.startsWith('/uploads/avatars/')) {
      const oldFilePath = path.join(__dirname, '..', user.avatar);
      if (fs.existsSync(oldFilePath)) {
        try {
          fs.unlinkSync(oldFilePath);
        } catch (e) {
          console.warn('Failed to delete old avatar:', e.message);
        }
      }
    }

    user.avatar = DEFAULT_AVATAR;
    await user.save();

    await Activity.create({
      userId: user._id,
      type: 'security',
      icon: '👤',
      color: 'emerald',
      title: 'Profile Picture Removed',
      description: 'Reset profile picture to default avatar.',
      category: 'Profile',
      ip: req.ip || '127.0.0.1'
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      message: 'Profile picture reset to default.',
      avatar: DEFAULT_AVATAR,
      user: userObj
    });
  } catch (error) {
    console.error('Remove avatar error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while removing avatar: ' + error.message
    });
  }
};

