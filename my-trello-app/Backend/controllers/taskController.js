const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      listId: req.body.listId,
      assignedTo: req.body.assignedTo || []
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};