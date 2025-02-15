const { Router } = require('express');
const { getQuestions, generateQuestion } = require('../controllers/quizController');
const protect = require('../middleware/authMiddleware');

const router = Router();

router.get('/', protect, getQuestions);
router.post('/generate', protect, generateQuestion);

module.exports = router;
