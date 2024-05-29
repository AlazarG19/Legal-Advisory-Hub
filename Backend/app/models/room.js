const mongoose = require('mongoose')
const RoomSchema = new mongoose.Schema({
    participants:[String],
    roomId: String,
    userId: String,
    clientId: String
})

const Room = mongoose.model('conversation', RoomSchema);

module.exports = Room;