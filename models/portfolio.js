const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
                trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const portfolio = mongoose.model('portfolio', PortfolioSchema, 'portfolio');

module.exports = portfolio;