import React, { useState } from 'react';
import axios from 'axios';
import './ImageUpload.css';

const ImageUpload = ({ setAnswer, setLoading }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert('Please upload an image.');
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/process-image`, formData);
      setAnswer(response.data.answer);
    } catch (error) {
      alert('Error processing the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload & Process</button>
    </div>
  );
};

export default ImageUpload;
