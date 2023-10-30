const mongoose = require('mongoose');
const userRoles = require('../utils/userRoles');

const isGmail = function(email) {
    return /\b[A-Z0-9._%+-]+@gmail\.com\b/i.test(email);
};

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    token: {
        type: String
    },
    role: {
        type: String,
        enum: [userRoles.USER, userRoles.ADMIN],
        default: userRoles.USER
    }
})

module.exports = mongoose.model('User', userSchema);