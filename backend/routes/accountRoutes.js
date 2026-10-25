const express = require('express');
const router = express.Router();
const {
  getAccounts,
  getAccountsByApp,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount
} = require('../controllers/accountController');
const { protect } = require('../middleware/auth');

router.use(protect);

router.get('/apps', getAccountsByApp);
router.get('/by-app', getAccountsByApp);
router.get('/search', getAccounts);

router.route('/')
  .get(getAccounts)
  .post(createAccount);

router.route('/:id')
  .get(getAccountById)
  .put(updateAccount)
  .delete(deleteAccount);

module.exports = router;
