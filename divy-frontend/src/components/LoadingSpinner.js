import React from 'react';
import { ClipLoader } from 'react-spinners';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader size={50} color="#4A90E2" />
      <p>Processing your request...</p>
    </div>
  );
};

export default LoadingSpinner;
