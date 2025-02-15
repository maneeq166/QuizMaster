import React from 'react';
const QuizCard = ({ question, options, onSelect }) => (
  <div className='quiz-card'>
    <h3>{question}</h3>
    {options.map((option, index) => (
      <button key={index} onClick={() => onSelect(option)}>{option}</button>
    ))}
  </div>
);
export default QuizCard;