const PortfolioPage = require('../../models/portfolio');
const Project = require('../../models/project');

exports.addProject = async (req, res) => {
    try {
        await Project.create(req.body);

        res.status(201).redirect('/admin/portfolio');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.deleteProject = async (req, res) => {
    try {
        await Project.deleteOne({ slug: req.params.slug });

        res.status(200).redirect('/admin/portfolio');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.getPortfolioPage = async (req, res) => {
    try {
        const portfolioPage = await PortfolioPage.findOne();
        const projects = await Project.find().sort('-createdAt');

        res.status(200).render('layouts/admin', {
            fileName: 'portfolio',
            portfolioPage,
            projects
        });
    } catch (error) {
        res.status(400).send('Something went wrong! please try again later.');
    }
}

exports.updatePortfolioPage = async (req, res) => {
    try {
        const portfolioPage = await PortfolioPage.findOne();
        const { headline, context } = req.body;

        portfolioPage.headline = headline;
        portfolioPage.context = context;
        await portfolioPage.save();

        res.status(200).redirect('/admin/portfolio');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.updateProject = async (req, res) => {
    try {
        const { name, description, link } = req.body;
        const project = await Project.findOne({ slug: req.params.slug });

        project.name = req.body.name;
        project.description = req.body.description;
        project.link = req.body.link
await project.save();

res.status(200).redirect('/admin/portfolio')
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}