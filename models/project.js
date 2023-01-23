const mongoose = require('mongoose');
const slugify = require('slugify');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
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
    
});

ProjectSchema.pre('validate', function (next) {
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    });
});


const project = mongoose.model('project', ProjectSchema);
module.exports = project;