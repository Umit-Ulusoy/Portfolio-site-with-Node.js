const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

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
    },
    portfolio: [{
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
        },
        slug: {
            type: String,
            required: true
        }
    }]
}
);

PortfolioSchema.pre('validate', function (next) {
    this.portfolio[0].slug = slugify(this.portfolio[0].name, {
        lower: true,
        strict: true
    });
});

const portfolio = mongoose.model('portfolio', PortfolioSchema, 'portfolio');

module.exports = portfolio;