const mongoose = require('mongoose')
const CompletedOfferSchema = new mongoose.Schema({
    userid: String,
    title: String,
    description: String,
    price: String,
    status: String,
})

const completedOffer = mongoose.model("completed_offers", CompletedOfferSchema)

module.exports = completedOffer;