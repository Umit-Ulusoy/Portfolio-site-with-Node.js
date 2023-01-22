const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('^(\/|\/home)$').get(pageController.getHomePage);
router.route('/portfolio').get(pageController.getPortfolioPage);
router.route('/services').get(pageController.getServicePage);

module.exports = router;