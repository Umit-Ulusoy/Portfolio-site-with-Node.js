const express = require('express');
const aboutController = require('../controllers/auth/aboutController');
const authController = require('../controllers/auth/authController');
const homeController = require('../controllers/auth/homeController');
const portfolioController = require('../controllers/auth/portfolioController');
const serviceController = require('../controllers/auth/serviceController');
const router = express.Router();

router.route('/login').get(authController.getLoginPage);

router.route('/about').get(aboutController.getAboutPage);

router.route('/home').get(homeController.getHomePage);
router.route('/home').put(homeController.updateHomePage);

router.route('/portfolio').get(portfolioController.getPortfolioPage);
router.route('/portfolio').post(portfolioController.addProject);
router.route('/portfolio/:slug').delete(portfolioController.deleteProject);
router.route('/portfolio').put(portfolioController.updatePortfolioPage);
router.route('/portfolio/:slug').put(portfolioController.updateProject);

router.route('/services').get(serviceController.getServicePage);
router.route('/services').post(serviceController.addService);
router.route('/services/:slug').delete(serviceController.deleteService);
router.route('/services').put(serviceController.updateServicePage);
router.route('/services/:slug').put(serviceController.updateService);

module.exports = router;