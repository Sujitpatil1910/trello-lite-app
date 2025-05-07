const List = require('../models/listModel');

exports.createList = async (req, res) => {
  try {
    const list = new List({ name: req.body.name, boardId: req.body.boardId });
    await list.save();
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};