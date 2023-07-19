const express = require('express');
const router = express.Router();
const {authenticateToken} = require('../global/middlewares/authenticate');
const userController = require("../controllers/usersController")


router.get('/profile',authenticateToken, userController.getProfile);
router.put('/edit', authenticateToken, userController.updateProfile);
router.delete('/delete', authenticateToken, userController.deleteProfile);

module.exports = router;