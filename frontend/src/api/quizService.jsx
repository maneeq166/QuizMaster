import axios from 'axios';
export const fetchQuestions = async () => {
  try {
    const response = await axios.get('/api/quiz');
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export const generateQuestion = async () => {
  try {
    const response = await axios.post('/api/quiz/generate');
    return response.data;
  } catch (error) {
    console.error('Error generating AI question:', error);
    return null;
  }
};