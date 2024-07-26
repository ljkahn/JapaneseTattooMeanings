// models/Artist.js
const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    bio: String,
    website: String,
    images: [String] // to store URLs of uploaded images
  }
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
