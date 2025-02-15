import axios from 'axios';

const API_URL = 'http://localhost:5000/api/quiz';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${API_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export const generateQuestion = async () => {
  try {
    const response = await axios.post(`${API_URL}/generate`);
    return response.data;
  } catch (error) {
    console.error('Error generating question:', error);
    return null;
  }
};
