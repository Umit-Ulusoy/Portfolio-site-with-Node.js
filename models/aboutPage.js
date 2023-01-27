const mongoose = require('mongoose');
const slugify = require('slugify');
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
    slug: {
        type: String,
        required: true
    }
}
);

AboutPageSchema.pre('validate', function (next) {
    this.slug = slugify(this.headline, {
        lower: true,
        strict: true
    });

    next();
});


const aboutPage = mongoose.model('aboutPage', AboutPageSchema, 'about_page');

module.exports = aboutPage;