const AboutPage = require('../../models/aboutPage');

exports.getAboutPage = async (req, res) => {
    try {
        const aboutSections = await AboutPage.find();

        res.status(200).render('layouts/admin', {
            fileName: 'about',
            aboutSections
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}