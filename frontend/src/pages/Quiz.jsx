import React, { useState, useEffect } from 'react';
import { fetchQuestions, generateQuestion } from '../api/quizService';
import QuizCard from '../components/QuizCard';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    })();
  }, []);

  const handleGenerate = async () => {
    const aiQuestion = await generateQuestion();
    if (aiQuestion) {
      setQuestions(prev => [...prev, aiQuestion]);
    }
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generate AI Question</button>
      {questions.map((q, index) => (
        <QuizCard key={index} question={q.question} options={q.options} onSelect={() => {}} />
      ))}
    </div>
  );
};

export default Quiz;
