const User = require('../models/User');
const Account = require('../models/Account');
const Document = require('../models/Document');
const Note = require('../models/Note');
const Trash = require('../models/Trash');
const Activity = require('../models/Activity');
const { decryptSecret } = require('../utils/crypto');

// @desc    Get complete synchronized vault state for the active user
// @route   GET /api/vault/sync
// @access  Private
exports.getVaultState = async (req, res) => {
  try {
    const userId = req.user._id;

    const [user, accounts, documents, notes, trash, activities] = await Promise.all([
      User.findById(userId).select('-password'),
      Account.find({ userId }).sort({ createdAt: -1 }),
      Document.find({ userId }).sort({ createdAt: -1 }),
      Note.find({ userId }).sort({ createdAt: -1 }),
      Trash.find({ userId }).sort({ createdAt: -1 }),
      Activity.find({ userId }).sort({ createdAt: -1 }).limit(30)
    ]);

    // Decrypt passwords for authenticated user
    const formattedAccounts = accounts.map(acc => {
      const obj = acc.toObject();
      obj.id = obj._id.toString();
      obj.password = decryptSecret(obj.password);
      return obj;
    });

    const formattedDocs = documents.map(d => {
      const obj = d.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    const formattedNotes = notes.map(n => {
      const obj = n.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    const formattedTrash = trash.map(t => {
      const obj = t.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    const formattedActivities = activities.map(a => {
      const obj = a.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    // Calculate audit metrics
    let weakCount = 0;
    let reusedCount = 0;
    let compromisedCount = 0;
    const passwordMap = {};

    formattedAccounts.forEach(acc => {
      const p = acc.password || '';
      if (p.length < 8) weakCount++;
      if (p) {
        passwordMap[p] = (passwordMap[p] || 0) + 1;
      }
    });

    Object.values(passwordMap).forEach(count => {
      if (count > 1) reusedCount += count;
    });

    const totalAccounts = formattedAccounts.length;
    let healthScore = 100;
    if (totalAccounts > 0) {
      const issues = weakCount * 15 + reusedCount * 10 + compromisedCount * 25;
      healthScore = Math.max(10, Math.min(100, Math.round(100 - (issues / (totalAccounts * 20)) * 100)));
    }

    return res.status(200).json({
      success: true,
      data: {
        user: user.toObject(),
        passwords: formattedAccounts,
        documents: formattedDocs,
        notes: formattedNotes,
        trash: formattedTrash,
        activities: formattedActivities,
        stats: {
          totalAccounts,
          totalDocuments: formattedDocs.length,
          totalNotes: formattedNotes.length,
          trashCount: formattedTrash.length,
          healthScore,
          weakCount,
          reusedCount,
          compromisedCount
        }
      }
    });
  } catch (err) {
    console.error('getVaultState error:', err);
    return res.status(500).json({ success: false, message: 'Failed to sync vault state' });
  }
};

// @desc    Update user profile / personal details
// @route   PUT /api/vault/profile
// @access  Private
exports.updateProfile = async (req, res) => {
  try {
    const { name, recoveryEmail, avatar, role, settings } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (name) user.name = name;
    if (recoveryEmail) user.recoveryEmail = recoveryEmail;
    if (avatar) user.avatar = avatar;
    if (role) user.role = role;
    if (settings) {
      user.settings = { ...user.settings.toObject(), ...settings };
    }

    await user.save();

    await Activity.create({
      userId: req.user._id,
      type: 'security',
      icon: '👤',
      color: 'indigo',
      title: 'Profile Updated',
      description: 'Personal details and preferences saved securely.',
      category: 'Security'
    });

    const userObj = user.toObject();
    delete userObj.password;

    return res.status(200).json({
      success: true,
      data: userObj,
      user: userObj,
      message: 'Profile updated successfully'
    });
  } catch (err) {
    console.error('updateProfile error:', err);
    return res.status(500).json({ success: false, message: err.message || 'Error updating profile' });
  }
};

// @desc    Update user preferences / settings
// @route   PUT /api/vault/settings
// @access  Private
exports.updateSettings = async (req, res) => {
  try {
    const { settings } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.settings = {
      ...user.settings.toObject(),
      ...settings
    };

    await user.save();

    return res.status(200).json({
      success: true,
      data: user.settings,
      message: 'Settings updated successfully'
    });
  } catch (err) {
    console.error('updateSettings error:', err);
    return res.status(500).json({ success: false, message: 'Error updating settings' });
  }
};
