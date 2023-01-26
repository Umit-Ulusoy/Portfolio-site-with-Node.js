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