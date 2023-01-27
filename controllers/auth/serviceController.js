const ServicePage = require('../../models/servicePage');
const Service = require('../../models/service');

exports.addService = async (req, res) => {
    try {

        await Service.create(req.body);

        res.status(201).redirect('/admin/services');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.deleteService = async (req, res) => {
    try {
        await Service.deleteOne({ slug: req.params.slug });

        res.status(200).redirect('/admin/services');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

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

exports.updateServicePage = async (req, res) => {
    try {

        const { headline, context } = req.body;
        const servicePage = await ServicePage.findOne();

        servicePage.headline = headline;
        servicePage.context = context;
        await servicePage.save();

        res.status(200).redirect('/admin/services');
    } catch (error) {
        res.status(400).send('Something went wrong! Please try again later.');
    }
}

exports.updateService = async (req, res) => {
    try {
        const service = await Service.findOne({ slug: req.params.slug });
        const { name,description } = req.body;

        service.name = name;
        service.description = description;
        await service.save();

        res.status(200).redirect('/admin/services');
    } catch (error) {
        res.status(400).send('Something went wrong! please try again later.');
    }
}