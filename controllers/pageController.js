const Portfolio = require('../models/portfolio');
const Service = require('../models/service');

exports.getAboutPage = async (req, res) => {
    try {
        res.status(200).render('layouts/user', {
            fileName: 'about'
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.getContactPage = async (req, res) => {
    res.status(200).render('layouts/user', {
        fileName: 'contact'
    });
}

exports.getHomePage = async (req, res) => {
        res.status(200).render('layouts/user', {
            fileName: 'home'
        });

}

exports.getPortfolioPage = async (req, res) => {
try {
    const portfolios = await Portfolio.find();
        res.status(200).render('layouts/user', {
            fileName: 'portfolio',
            portfolios
        });    
} catch (error) {
    res.status(400).send('Something went wrong! Please try again later.');
}

}

exports.getServicePage = async (req, res) => {
try {
    const services = await Service.find({});
    
    res.status(200).render('layouts/user', {
        fileName: 'services',
        services
    });
} catch (error) {
    res.status(400).send('Something went wrong! Please again later.');
}
}