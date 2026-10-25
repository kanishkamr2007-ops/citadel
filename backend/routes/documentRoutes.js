const express = require('express');
const router = express.Router();
const {
  getDocuments,
  getDocumentById,
  createDocument,
  downloadDocument,
  viewDocument,
  updateDocument,
  deleteDocument
} = require('../controllers/documentController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getDocuments)
  .post(createDocument);

router.get('/:id/download', downloadDocument);
router.get('/:id/view', viewDocument);

router.route('/:id')
  .get(getDocumentById)
  .put(updateDocument)
  .delete(deleteDocument);

module.exports = router;
