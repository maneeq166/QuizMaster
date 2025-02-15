const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure you set this in your environment variables
});

module.exports = openai;
