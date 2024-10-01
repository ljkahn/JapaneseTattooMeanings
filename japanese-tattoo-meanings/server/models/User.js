// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  website: String,

  location: String, // For user-defined location
  style: String,    // Tattooing style
  price: Number,    // Price of service
});

module.exports = mongoose.model('User', userSchema);
