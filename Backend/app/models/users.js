const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: String,
    catagory: String,
    email: String
})

const users = mongoose.model("users", UserSchema)

module.exports = users;