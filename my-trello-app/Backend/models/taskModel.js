const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' }
});
module.exports = mongoose.model('Task', taskSchema);