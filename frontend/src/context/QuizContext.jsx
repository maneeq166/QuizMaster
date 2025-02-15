import React, { createContext, useState } from 'react';
import { fetchQuestions } from '../api/quizService';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const loadQuestions = async () => {
    const data = await fetchQuestions();
    setQuestions(data);
  };

  return (
    <QuizContext.Provider value={{ questions, currentQuestionIndex, loadQuestions }}>
      {children}
    </QuizContext.Provider>
  );
};