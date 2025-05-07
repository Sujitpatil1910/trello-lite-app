const express = require('express');
const router = express.Router();
const { createBoard, getBoards } = require('../controllers/boardController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createBoard);
router.get('/', auth, getBoards);

module.exports = router;