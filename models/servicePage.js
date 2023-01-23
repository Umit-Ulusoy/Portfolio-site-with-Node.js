const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicePageSchema = new Schema({
    headline: {
        type: String,
        required: true,
        trim: true
    },
    context: {
        type: String,
        required: true,
        trim: true
    }
}
);


const servicePage = mongoose.model('servicePage', ServicePageSchema, 'service_page');

module.exports = servicePage;