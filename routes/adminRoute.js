const express = require('express');
const authController = require('../controllers/auth/authController');
const homeController = require('../controllers/auth/homeController');
const portfolioController = require('../controllers/auth/portfolioController');
const router = express.Router();

router.route('/login').get(authController.getLoginPage);
router.route('/home').get(homeController.getHomePage);
router.route('/home').put(homeController.updateHomePage);
router.route('/portfolio').get(portfolioController.getPortfolioPage);

module.exports = router;