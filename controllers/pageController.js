const Portfolio = require('../models/portfolio');
const Project = require('../models/project');
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
    const portfolio = await Portfolio.findOne();
    const projects = await Project.find();

        res.status(200).render('layouts/user', {
            fileName: 'portfolio',
            portfolio,
            projects
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