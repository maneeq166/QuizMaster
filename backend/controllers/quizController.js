const Quiz = require('../models/quiz');
const { generateAIQuestion } = require('../utils/generateQuestions');

const getQuestions = async (req, res) => {
  try {
    const questions = await Quiz.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

const generateQuestion = async (req, res) => {
  try {
    const aiQuestion = await generateAIQuestion();
    if (!aiQuestion) {
      return res.status(500).json({ message: 'AI failed to generate a question' });
    }
    res.json({ question: aiQuestion, options: ['A', 'B', 'C', 'D'], correctAnswer: 'A' });
  } catch (error) {
    res.status(500).json({ message: 'Error generating AI question', error });
  }
};

module.exports = { getQuestions, generateQuestion };