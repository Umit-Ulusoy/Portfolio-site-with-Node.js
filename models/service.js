const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    service: {
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

const service = mongoose.model('Service', ServiceSchema);

module.exports = service;