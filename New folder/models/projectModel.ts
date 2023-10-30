const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    sourceCode: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tools: {
        type: [String],
        required: true
    },
    test: {
        type: [String]
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
