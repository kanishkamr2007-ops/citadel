const Note = require('../models/Note');
const Trash = require('../models/Trash');
const Activity = require('../models/Activity');

function getNoteCategoryIcon(cat) {
  switch (cat) {
    case 'Education': return '🎓';
    case 'Finance': return '🪙';
    case 'Work': return '💼';
    case 'Personal': return '👤';
    default: return '📝';
  }
}

// @desc    Get all secure notes
// @route   GET /api/notes
exports.getNotes = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = { userId: req.user._id };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      const searchRegex = { $regex: search, $options: 'i' };
      query.$or = [{ title: searchRegex }, { content: searchRegex }];
    }

    const notes = await Note.find(query).sort({ createdAt: -1 });
    const formattedNotes = notes.map(n => {
      const obj = n.toObject();
      obj.id = obj._id.toString();
      return obj;
    });

    return res.json({ success: true, count: formattedNotes.length, notes: formattedNotes });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get note by ID
// @route   GET /api/notes/:id
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
    if (!note) {
      return res.status(404).json({ success: false, message: 'Note not found' });
    }
    const noteObj = note.toObject();
    noteObj.id = noteObj._id.toString();
    return res.json({ success: true, note: noteObj });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new secure note
// @route   POST /api/notes
exports.createNote = async (req, res) => {
  try {
    const { title, category, content, color, tags } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: 'Note title is required.' });
    }

    const cat = category || 'Personal';
    const noteContent = content || '';
    const preview = noteContent.slice(0, 70).replace(/[#*`]/g, '') + '...';

    const note = await Note.create({
      userId: req.user._id,
      title,
      category: cat,
      categoryIcon: getNoteCategoryIcon(cat),
      color: color || 'indigo',
      content: noteContent,
      preview,
      tags: tags || ['Encrypted']
    });

    await Activity.create({
      userId: req.user._id,
      type: 'note',
      icon: '📝',
      color: 'violet',
      title: `Created Note "${note.title}"`,
      description: `New encrypted note in ${note.category} category.`,
      category: 'Notes'
    });

    const noteObj = note.toObject();
    noteObj.id = noteObj._id.toString();

    return res.status(201).json({
      success: true,
      message: `Note "${title}" encrypted and saved.`,
      note: noteObj
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update secure note
// @route   PUT /api/notes/:id
exports.updateNote = async (req, res) => {
  try {
    const { title, category, content, color, tags } = req.body;
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });

    if (!note) {
      return res.status(404).json({ success: false, message: 'Note not found' });
    }

    if (title) note.title = title;
    if (category) {
      note.category = category;
      note.categoryIcon = getNoteCategoryIcon(category);
    }
    if (color) note.color = color;
    if (tags) note.tags = tags;
    if (content !== undefined) {
      note.content = content;
      note.preview = content.slice(0, 70).replace(/[#*`]/g, '') + '...';
    }

    note.lastUpdated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    await note.save();

    await Activity.create({
      userId: req.user._id,
      type: 'note',
      icon: '📝',
      color: 'violet',
      title: `Updated Note "${note.title}"`,
      description: 'Note contents re-encrypted.',
      category: 'Notes'
    });

    const noteObj = note.toObject();
    noteObj.id = noteObj._id.toString();

    return res.json({
      success: true,
      message: `Updated "${note.title}".`,
      note: noteObj
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete note (move to Trash)
// @route   DELETE /api/notes/:id
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
    if (!note) {
      return res.status(404).json({ success: false, message: 'Note not found' });
    }

    const noteObj = note.toObject();
    noteObj.id = noteObj._id.toString();

    await Trash.create({
      userId: req.user._id,
      originalId: note._id.toString(),
      itemType: 'note',
      title: note.title,
      originalCategory: note.category,
      deletedDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      daysRemaining: 30,
      data: noteObj
    });

    await Note.findByIdAndDelete(note._id);

    await Activity.create({
      userId: req.user._id,
      type: 'note',
      icon: '🗑️',
      color: 'rose',
      title: `Moved "${note.title}" to Trash`,
      description: 'Note moved to Trash vault.',
      category: 'Notes'
    });

    return res.json({ success: true, message: `"${note.title}" moved to Trash.` });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
