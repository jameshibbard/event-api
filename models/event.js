const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  type: { type: String, required: [true, 'A type is required'] },
  date: { type: Date, required: [true, 'A date is required'] },
  title: { type: String, required: [true, 'A title is required'] },
  speaker: { type: String, required: [true, 'A speaker is required'] },
  host: { type: String, required: [true, 'A host is required'] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('events', schema);
