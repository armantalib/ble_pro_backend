const mongoose = require('mongoose');
const logger = require('./logger'); // Adjust the path as needed

module.exports = function () {
  const db = 'mongodb+srv://myapp1jb:APllZz9vbj3FXrLQ@clustermongosa.tch8fkz.mongodb.net/ble_prototype';
  mongoose.connect(db)
    .then(() => logger.info(`Connected to ${db}...`));
}