const express = require('express');
const router = express.Router();
const {
  getVaultState,
  updateProfile,
  updateSettings
} = require('../controllers/vaultController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/sync', getVaultState);
router.put('/profile', updateProfile);
router.put('/settings', updateSettings);

module.exports = router;
