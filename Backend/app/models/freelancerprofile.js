const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;
const FreelancerProfileSchema = new mongoose.Schema({
    userid: Schema.Types.ObjectId,
    category: String,
    firm: String,
    contact: String,
    city: String,
    language: String,
    bio: String
})

const FreelancerProfile = mongoose.model('freelancerprofile', FreelancerProfileSchema);

module.exports = FreelancerProfile;