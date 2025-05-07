const express = require('express');
const router = express.Router();
const { createList } = require('../controllers/listController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createList);

module.exports = router;