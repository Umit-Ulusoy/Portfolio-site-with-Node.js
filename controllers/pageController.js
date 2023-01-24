const Portfolio = require('../models/portfolio');
const AboutPage = require('../models/aboutPage');
const ContactPage = require('../models/contactPage');
const HomePage = require('../models/homePage');
const Project = require('../models/project');
const Service = require('../models/service');
const ServicePage = require('../models/servicePage');

exports.getAboutPage = async (req, res) => {
    try {
        const aboutPage = await AboutPage.find();

        res.status(200).render('layouts/user', {
            fileName: 'about',
            aboutPage
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.getContactPage = async (req, res) => {
try {
    const contactPage = await ContactPage.findOne();

        res.status(200).render('layouts/user', {
        fileName: 'contact',
        contactPage
    });
} catch (error) {
    res.status(400).send('Something went wrong! Please try again later.');
}
}

exports.getHomePage = async (req, res) => {
try {
    const homePage = await HomePage.findOne();

    res.status(200).render('layouts/user', {
        fileName: 'home',
        homePage
    });
} catch (error) {
    res.status(400).send('Something went wrong! Please try again later.');
}

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
    const servicePage = await ServicePage.findOne();
    const services = await Service.find();
    
    res.status(200).render('layouts/user', {
        fileName: 'services',
        services,
        servicePage
    });
} catch (error) {
    res.status(400).send('Something went wrong! Please again later.');
}
}