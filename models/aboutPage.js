const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutPageSchema = new Schema({
    headline: {
        type: String,
        required: true,
        trim: true
    },
    context: {
        type: String,
        required: true,
        trim: true
    },
}
);


const aboutPage = mongoose.model('aboutPage', AboutPageSchema, 'about_page');

module.exports = aboutPage;