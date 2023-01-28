const ContactPage = require('../../models/contactPage');

exports.getContactPage = async (req, res) => {
    try {
        const contactPage = await ContactPage.findOne();

        res.status(200).render('layouts/admin', {
            fileName: 'contact',
            contactPage
        });
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.updateContactPage = async (req, res) => {
    try {
        const contactPage = await ContactPage.findOne();
        const { headline, context } = req.body;

        contactPage.headline = headline;
        contactPage.context = context;
        await contactPage.save();

        res.status(200).redirect('/admin/contact');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}