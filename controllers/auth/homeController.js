const HomePage = require('../../models/homePage');
exports.getHomePage = async (req, res) => {
    try {
        const homePage = await HomePage.findOne();

        res.status(200).render('layouts/admin', {
            fileName: 'home',
            homePage
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.updateHomePage = async (req, res) => {
    try {
        const { headline, context } = req.body;
        const homePage = await HomePage.findOne();
        homePage.headline = headline;
        homePage.context = context;
        await homePage.save();

        res.status(200).render('layouts/admin', {
            fileName: 'home',
            homePage
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}