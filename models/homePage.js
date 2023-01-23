const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomePageSchema = new Schema({
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


const homePage = mongoose.model('homePage', HomePageSchema, 'home_page');

module.exports = homePage;