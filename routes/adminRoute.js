const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/login').get(authController.getLoginPage);

module.exports = router;