import openai from '../config/openai.js';

const generateAIQuestion = async () => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: 'Generate a multiple-choice question on JavaScript.',
      max_tokens: 100,
    });

    return response.choices?.[0]?.text?.trim() || null;
  } catch (error) {
    console.error('Error generating AI question:', error);
    return null;
  }
};

export { generateAIQuestion };
