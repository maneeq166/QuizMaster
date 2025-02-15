const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you have this in your .env file
});

const openai = new OpenAIApi(configuration);

const generateQuestion = async (topic) => {
  try {
    const prompt = `Generate a multiple-choice quiz question on ${topic}. Provide four options and the correct answer.`;
    
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating question:', error);
    throw new Error('Failed to generate question');
  }
};

module.exports = { generateQuestion };
