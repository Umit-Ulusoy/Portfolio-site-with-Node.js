const ServicePage = require('../../models/servicePage');
const Service = require('../../models/service');

exports.getServicePage = async (req, res) => {
    try {
        const servicePage = await ServicePage.findOne();
        const services = await Service.find().sort('-createdAt');

        res.status(200).render('layouts/admin', {
            fileName: 'service',
            servicePage,
            services
        });
    } catch (error) {
res.status(400).send('Something went wrong! Please try again later.');
    }
}