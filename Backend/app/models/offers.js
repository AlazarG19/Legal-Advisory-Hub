const mongoose = require('mongoose')
const OfferSchema = new mongoose.Schema({
    userid: String,
    title: String,
    description: String,
    price: String,
})

const offer = mongoose.model("offers", OfferSchema)

module.exports = offer;