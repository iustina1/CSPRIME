const express = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/me', requireAuth, authController.getCurrentUser);

module.exports = router;
