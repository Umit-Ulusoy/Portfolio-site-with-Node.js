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