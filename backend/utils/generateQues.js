const axios = require('axios');

const generateAIQuestion = async () => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Generate a multiple-choice question on JavaScript.' }],
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
      }
    );

    return response.data.choices?.[0]?.message?.content?.trim() || null;
  } catch (error) {
    console.error('Error generating AI question:', error.response?.data || error.message);
    return null;
  }
};

module.exports = { generateAIQuestion };
