const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: String,
    catagory: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    verified: Boolean

})

const users = mongoose.model("users", UserSchema)

module.exports = users;