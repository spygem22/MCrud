const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    gender:{
       type: String,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

},
{
    timestamps: true
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
