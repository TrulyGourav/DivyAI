import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);

  // Handle file change
  const onFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      setError('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/process-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setAnswer(response.data.answer);
    } catch (error) {
      setError('An error occurred while processing the image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Image to Solve Problem</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit" disabled={loading}>Upload and Process</button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="error">{error}</div>}
      {answer && <div className="answer">{answer}</div>}
    </div>
  );
}

export default ImageUpload;
