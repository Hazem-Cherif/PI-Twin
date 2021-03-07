const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    birthDate: {
        type: Date,
    },
})

module.exports = mongoose.model('profile', ProfileSchema);