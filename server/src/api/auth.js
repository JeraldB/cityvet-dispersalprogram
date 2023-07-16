const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// User Registration
router.post('/register/user', authController.registerUser);

// Admin Registration
router.post('/register/admin', authController.registerAdmin);

// User Login
router.post('/login/user', authController.loginUser);

// Admin Login
router.post('/login/admin', authController.loginAdmin);

// Refresh Access Token
router.post('/refresh-token', authController.refreshAccessToken);

module.exports = router;

