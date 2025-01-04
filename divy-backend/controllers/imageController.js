const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to process image
exports.processImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    // Send image to an external API for OCR or image processing (mock)
    const response = await axios.post(process.env.OCR_API_URL, {
      image: fs.readFileSync(imagePath),
    });

    const answer = response.data.answer; // Assume the API sends an 'answer'

    // Delete image after processing
    fs.unlinkSync(imagePath);

    return res.status(200).json({ answer });
  } catch (error) {
    console.error('Error processing image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
