const PortfolioPage = require('../../models/portfolio');
const Project = require('../../models/project');

exports.getPortfolioPage = async (req, res) => {
    try {
        const portfolioPage = await PortfolioPage.findOne();
        const projects = await Project.find();

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
        const project = await Project.findOne({ _id: req.params.projectId });

        project.name = req.body.name;
        project.description = req.body.description;
        project.link = req.body.link
await project.save();

res.status(200).redirect('/admin/portfolio')
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}