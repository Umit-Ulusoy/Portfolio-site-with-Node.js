const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
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


const portfolio = mongoose.model('portfolio', PortfolioSchema, 'portfolio');

module.exports = portfolio;