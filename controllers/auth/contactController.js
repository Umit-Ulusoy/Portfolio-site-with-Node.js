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