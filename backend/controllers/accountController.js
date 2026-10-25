const Account = require('../models/Account');
const Trash = require('../models/Trash');
const Activity = require('../models/Activity');
const { encryptSecret, decryptSecret } = require('../utils/crypto');

function extractDomain(url) {
  if (!url) return '';
  try {
    const cleanUrl = url.startsWith('http') ? url : `https://${url}`;
    const parsed = new URL(cleanUrl);
    return parsed.hostname.replace('www.', '');
  } catch (e) {
    return url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0] || '';
  }
}

function getIconForCategory(cat, title = '') {
  const t = title.toLowerCase();
  if (t.includes('google') || t.includes('gmail')) return '🌐';
  if (t.includes('github')) return '🐙';
  if (t.includes('bank') || t.includes('chase') || t.includes('citi') || t.includes('stripe')) return '🏦';
  if (t.includes('aws') || t.includes('cloud')) return '☁️';
  if (t.includes('spotify')) return '🎵';
  if (t.includes('netflix')) return '🎬';
  if (t.includes('game') || t.includes('steam')) return '🎮';
  if (t.includes('amazon') || t.includes('shop')) return '📦';
  if (t.includes('slack') || t.includes('discord')) return '💬';
  if (t.includes('proton') || t.includes('mail')) return '🔒';
  if (t.includes('instagram')) return '📸';
  return '🔑';
}

function evaluateStrength(password) {
  if (!password) return { level: 'weak', score: 10 };
  let score = 0;
  if (password.length >= 8) score += 25;
  if (password.length >= 14) score += 25;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[a-z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 10;
  if (/[^A-Za-z0-9]/.test(password)) score += 10;
  
  if (score >= 80) return { level: 'strong', score };
  if (score >= 50) return { level: 'medium', score };
  return { level: 'weak', score };
}

// @desc    Get all accounts/credentials for current user
// @route   GET /api/accounts
exports.getAccounts = async (req, res) => {
  try {
    const { category, search, appTitle } = req.query;
    let query = { userId: req.user._id };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (appTitle) {
      query.title = { $regex: new RegExp('^' + appTitle + '$', 'i') };
    }

    if (search) {
      const searchRegex = { $regex: search, $options: 'i' };
      query.$or = [
        { title: searchRegex },
        { username: searchRegex },
        { domain: searchRegex },
        { notes: searchRegex }
      ];
    }

    const accounts = await Account.find(query).sort({ createdAt: -1 });

    // Decrypt passwords for the authenticated user
    const decryptedAccounts = accounts.map(acc => {
      const accObj = acc.toObject();
      accObj.id = accObj._id.toString();
      accObj.password = decryptSecret(accObj.password);
      return accObj;
    });

    return res.json({
      success: true,
      count: decryptedAccounts.length,
      accounts: decryptedAccounts
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get accounts grouped by Application (Multi-Account View)
// @route   GET /api/accounts/by-app
exports.getAccountsByApp = async (req, res) => {
  try {
    const accounts = await Account.find({ userId: req.user._id }).sort({ title: 1, createdAt: -1 });

    const grouped = {};
    accounts.forEach(acc => {
      const appKey = acc.title.trim();
      if (!grouped[appKey]) {
        grouped[appKey] = {
          application: appKey,
          domain: acc.domain,
          category: acc.category,
          favIcon: acc.favIcon,
          totalAccounts: 0,
          accounts: []
        };
      }
      const accObj = acc.toObject();
      accObj.id = accObj._id.toString();
      accObj.password = decryptSecret(accObj.password);
      grouped[appKey].accounts.push(accObj);
      grouped[appKey].totalAccounts++;
    });

    return res.json({
      success: true,
      applications: Object.values(grouped)
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single account by ID
// @route   GET /api/accounts/:id
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findOne({ _id: req.params.id, userId: req.user._id });
    if (!account) {
      return res.status(404).json({ success: false, message: 'Credential not found' });
    }

    const accObj = account.toObject();
    accObj.id = accObj._id.toString();
    accObj.password = decryptSecret(accObj.password);

    return res.json({
      success: true,
      account: accObj
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new account / credential
// @route   POST /api/accounts
exports.createAccount = async (req, res) => {
  try {
    const { title, url, username, password, category, notes, tags, accountType } = req.body;

    if (!title || !username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Title, username, and password are required.'
      });
    }

    const domain = extractDomain(url);
    const strengthInfo = evaluateStrength(password);
    const encryptedPassword = encryptSecret(password);
    const favIcon = getIconForCategory(category || 'Other', title);

    const newAccount = await Account.create({
      userId: req.user._id,
      title: title.trim(),
      url: url || '',
      domain,
      username: username.trim(),
      password: encryptedPassword,
      category: category || 'Other',
      accountType: accountType || 'Personal',
      notes: notes || '',
      tags: tags || [],
      strength: strengthInfo.level,
      strengthScore: strengthInfo.score,
      favIcon,
      lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    });

    await Activity.create({
      userId: req.user._id,
      type: 'password',
      icon: '🔑',
      color: 'blue',
      title: `Added "${newAccount.title}"`,
      description: `New credential created (${newAccount.username}) in ${newAccount.category}.`,
      category: 'Passwords'
    });

    const accObj = newAccount.toObject();
    accObj.id = accObj._id.toString();
    accObj.password = password; // return decrypted to client

    return res.status(201).json({
      success: true,
      message: `"${title}" encrypted and added to your vault.`,
      account: accObj
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update an account / credential
// @route   PUT /api/accounts/:id
exports.updateAccount = async (req, res) => {
  try {
    const { title, url, username, password, category, notes, tags, accountType } = req.body;
    const account = await Account.findOne({ _id: req.params.id, userId: req.user._id });

    if (!account) {
      return res.status(404).json({ success: false, message: 'Credential not found' });
    }

    let passwordChanged = false;
    if (password && password !== decryptSecret(account.password)) {
      account.password = encryptSecret(password);
      const strengthInfo = evaluateStrength(password);
      account.strength = strengthInfo.level;
      account.strengthScore = strengthInfo.score;
      passwordChanged = true;
    }

    if (title) {
      account.title = title.trim();
      account.favIcon = getIconForCategory(category || account.category, title);
    }
    if (url !== undefined) {
      account.url = url;
      account.domain = extractDomain(url);
    }
    if (username) account.username = username.trim();
    if (category) account.category = category;
    if (accountType) account.accountType = accountType;
    if (notes !== undefined) account.notes = notes;
    if (tags !== undefined) account.tags = tags;

    account.lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    await account.save();

    await Activity.create({
      userId: req.user._id,
      type: 'password',
      icon: '✏️',
      color: 'indigo',
      title: `Updated "${account.title}"`,
      description: passwordChanged ? 'Password secret rotated and re-encrypted.' : 'Metadata updated.',
      category: 'Passwords'
    });

    const accObj = account.toObject();
    accObj.id = accObj._id.toString();
    accObj.password = decryptSecret(accObj.password);

    return res.json({
      success: true,
      message: `"${account.title}" successfully updated.`,
      account: accObj
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete account (move to Trash)
// @route   DELETE /api/accounts/:id
exports.deleteAccount = async (req, res) => {
  try {
    const account = await Account.findOne({ _id: req.params.id, userId: req.user._id });
    if (!account) {
      return res.status(404).json({ success: false, message: 'Credential not found' });
    }

    const accObj = account.toObject();
    accObj.id = accObj._id.toString();
    accObj.password = decryptSecret(accObj.password);

    await Trash.create({
      userId: req.user._id,
      originalId: account._id.toString(),
      itemType: 'password',
      title: account.title,
      originalCategory: account.category,
      deletedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      daysRemaining: 30,
      data: accObj
    });

    await Account.findByIdAndDelete(account._id);

    await Activity.create({
      userId: req.user._id,
      type: 'password',
      icon: '🗑️',
      color: 'rose',
      title: `Moved "${account.title}" to Trash`,
      description: 'Item will be permanently deleted after 30 days.',
      category: 'Passwords'
    });

    return res.json({
      success: true,
      message: `"${account.title}" moved to Trash.`
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
