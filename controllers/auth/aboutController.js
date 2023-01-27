const AboutPage = require('../../models/aboutPage');

exports.addSection = async (req, res) => {
    try {
        await AboutPage.create(req.body);

        res.status(201).redirect('/admin/about');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.deleteSection = async (req, res) => {
    try {
        await AboutPage.deleteOne({ slug: req.params.slug });

        res.status(200).redirect('/admin/about');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

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

exports.updateSection = async (req, res) => {
    try {
        const aboutSection = await AboutPage.findOne({ slug: req.params.slug });
        const { headline, context } = req.body;

        aboutSection.headline = headline;
        aboutSection.context = context;
        await aboutSection.save();

        res.status(200).redirect('/admin/about');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}