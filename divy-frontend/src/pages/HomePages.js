import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import AnswerDisplay from '../components/AnswerDisplay';
import LoadingSpinner from '../components/LoadingSpinner';
import './HomePage.css';

const HomePage = () => {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="home-page">
      <h1>Visual AI Assistant</h1>
      <ImageUpload setAnswer={setAnswer} setLoading={setLoading} />
      {loading && <LoadingSpinner />}
      {answer && <AnswerDisplay answer={answer} />}
    </div>
  );
};

export default HomePage;
