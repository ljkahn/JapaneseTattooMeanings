const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String }, // Ensure this field is part of the schema
  website: { type: String },
  location: { type: String },
  style: { type: String },
  price: { type: Number }
});

module.exports = mongoose.model('User', userSchema);
