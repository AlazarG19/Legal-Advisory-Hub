const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    text: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  roomId: String,
  author: String
});

const message = mongoose.model("message", MessageSchema)

module.exports = message;