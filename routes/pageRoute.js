const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.route('^(\/|\/home)$').get(pageController.getHomePage);

module.exports = router;