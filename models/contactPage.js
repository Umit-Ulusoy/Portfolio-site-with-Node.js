const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactPageSchema = new Schema({
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


const contactPage = mongoose.model('contactPage', ContactPageSchema, 'contact_page');

module.exports = contactPage;