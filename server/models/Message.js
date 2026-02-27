const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Message", messageSchema);