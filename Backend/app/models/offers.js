const mongoose = require('mongoose')
const OfferSchema = new mongoose.Schema({
    userid: String,
    title: String,
    description: String,
    price: String,
    status: String,
})

const offer = mongoose.model("offers", OfferSchema)

module.exports = offer;