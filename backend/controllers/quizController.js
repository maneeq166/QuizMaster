import { generateAIQuestion } from '../utils/generateQuestions.js';

const getGeneratedQuestion = async (req, res) => {
  const question = await generateAIQuestion();
  if (!question) {
    return res.status(500).json({ error: 'Failed to generate a question' });
  }
  res.json({ question });
};

export { getGeneratedQuestion };
