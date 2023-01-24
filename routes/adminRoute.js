const express = require('express');
const authController = require('../controllers/auth/authController');
const homeController = require('../controllers/auth/homeController');
const router = express.Router();

router.route('/login').get(authController.getLoginPage);
router.route('/home').get(homeController.getHomePage);
router.route('/home').put(homeController.updateHomePage);

module.exports = router;