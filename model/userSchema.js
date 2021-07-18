const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    first_round_no: {
        type: Number,
        require:true
    },
    second_round_no: {
        type: Number,
        require:true
    },
    third_round_no: {
        type: Number,
        require:true
    },
});


const User = mongoose.model('USER', userSchema);

module.exports = User;