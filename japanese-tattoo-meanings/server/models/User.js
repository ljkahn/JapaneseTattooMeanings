const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['artist', 'client'], required: true },

  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  portfolio: [String]
});

UserSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);
