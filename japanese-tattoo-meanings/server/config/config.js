const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/tattooApp');

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

module.exports = mongoose.connection;
