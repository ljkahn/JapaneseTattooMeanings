const { connect, connection } = require('mongoose');

connect('mongodb://localhost/fullnameVirtual');

module.exports = connection;
