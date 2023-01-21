const Service = require('../models/service');

exports.getHomePage = async (req, res) => {
        res.status(200).render('layouts/user', {
            fileName: 'home'
        });

}

exports.getPortfolioPage = async (req, res) => {
        res.status(200).render('layouts/user', {
            fileName: 'portfolio'
        });

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