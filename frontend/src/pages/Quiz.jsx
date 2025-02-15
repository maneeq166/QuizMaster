import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const { user } = useContext(AuthContext);
  const { questions, currentQuestionIndex, loadQuestions } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      loadQuestions();
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Quiz</h2>
      {questions.length > 0 ? (
        <p>{questions[currentQuestionIndex]?.question}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
