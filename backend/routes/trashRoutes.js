const express = require('express');
const router = express.Router();
const {
  getTrashItems,
  restoreTrashItem,
  permanentlyDeleteTrashItem,
  emptyTrash
} = require('../controllers/trashController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getTrashItems)
  .delete(emptyTrash);

router.post('/:id/restore', restoreTrashItem);
router.delete('/:id', permanentlyDeleteTrashItem);

module.exports = router;
