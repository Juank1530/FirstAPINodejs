const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    lastName: String,
    age: Number,
    eMail: String,
    phone: String,
    mobile: String,
    password: String,
    address: String,
    city: String
})

module.exports = mongoose.model('user', UserSchema, 'user')