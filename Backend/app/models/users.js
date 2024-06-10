const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    catagory: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    verified: Boolean,
    username: String,
    userType: String,
    profilePicture: String,
    disabled: Boolean
})

const users = mongoose.model("users", UserSchema)

module.exports = users;