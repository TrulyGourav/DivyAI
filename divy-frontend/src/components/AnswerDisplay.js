import React from 'react';
import './AnswerDisplay.css';

const AnswerDisplay = ({ answer }) => {
  return (
    <div className="answer-display">
      <h2>Solution:</h2>
      <p>{answer}</p>
    </div>
  );
};

export default AnswerDisplay;
