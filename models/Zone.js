const mongoose = require('mongoose');

const duaScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cords: [],
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    index: true
  },
});

module.exports = mongoose.model('Zone', duaScheme);
