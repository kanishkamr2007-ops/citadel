const Activity = require('../models/Activity');

// @desc    Get user activities
// @route   GET /api/activities
// @access  Private
exports.getActivities = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 50;
    const activities = await Activity.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .limit(limit);

    const formatted = activities.map(a => {
      const obj = a.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    res.status(200).json({
      success: true,
      count: formatted.length,
      activities: formatted
    });
  } catch (err) {
    console.error('getActivities error:', err);
    res.status(500).json({ success: false, message: 'Server error retrieving activities' });
  }
};

// @desc    Log a new activity
// @route   POST /api/activities
// @access  Private
exports.createActivity = async (req, res) => {
  try {
    const { type, title, description, category, icon, color, device, ip } = req.body;

    const activity = await Activity.create({
      userId: req.user._id,
      type: type || 'security',
      title,
      description: description || '',
      category: category || 'Security',
      icon: icon || '🛡️',
      color: color || 'indigo',
      device: device || 'Chrome on Windows 11 Pro',
      ip: ip || req.ip || '127.0.0.1'
    });

    const obj = activity.toObject();
    obj.id = obj._id.toString();

    res.status(201).json({
      success: true,
      activity: obj
    });
  } catch (err) {
    console.error('createActivity error:', err);
    res.status(500).json({ success: false, message: 'Server error logging activity' });
  }
};

// @desc    Clear activity logs
// @route   DELETE /api/activities
// @access  Private
exports.clearActivities = async (req, res) => {
  try {
    await Activity.deleteMany({ userId: req.user._id });

    res.status(200).json({
      success: true,
      message: 'Activity history cleared'
    });
  } catch (err) {
    console.error('clearActivities error:', err);
    res.status(500).json({ success: false, message: 'Server error clearing activities' });
  }
};
