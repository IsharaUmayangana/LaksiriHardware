const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    
    name: String,
    email: String,
    phone: Number,
    password: String,

    role: {
        type: String,
        value: "Guest"
    }
})

const userModel = mongoose.model('User' , userSchema)

module.exports = userModel;