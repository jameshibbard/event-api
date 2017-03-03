const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: { type: String, required: [true, 'A title is required'] },
  date: { type: Date, required: [true, 'A date is required'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('events', schema);
