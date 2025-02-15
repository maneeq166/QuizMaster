const express = require('express');
const { getQuestions, generateQuestion } = require('../controllers/quizController');
const router = express.Router();

router.get('/questions', getQuestions);
router.post('/generate', generateQuestion);

module.exports = router;