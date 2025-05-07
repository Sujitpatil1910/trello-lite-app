const Board = require('../models/boardModel');

exports.createBoard = async (req, res) => {
  try {
    const board = new Board({ name: req.body.name, createdBy: req.user.id, users: [req.user.id] });
    await board.save();
    res.status(201).json(board);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ users: req.user.id });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};