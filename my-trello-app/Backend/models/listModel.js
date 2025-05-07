// models/listModel.js
const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
});
module.exports = mongoose.model('List', listSchema);