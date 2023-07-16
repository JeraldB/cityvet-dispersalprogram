const express = require('express');
const router = express.Router();
const authenticate = require('../global/middlewares/authenticate');
const userController = require('../controllers/usersController');

router.get('/profile', authenticate, userController.getUserProfile);
router.put('/edit', authenticate, userController.updateUserProfile);
router.delete('/delete', authenticate, userController.deleteUserProfile);

module.exports = router;