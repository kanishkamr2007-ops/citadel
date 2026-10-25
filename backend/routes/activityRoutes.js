const express = require('express');
const router = express.Router();
const {
  getActivities,
  createActivity,
  clearActivities
} = require('../controllers/activityController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/')
  .get(getActivities)
  .post(createActivity)
  .delete(clearActivities);

module.exports = router;
