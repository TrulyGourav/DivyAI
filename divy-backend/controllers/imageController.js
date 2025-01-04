const tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

// Function to process image using Tesseract OCR
exports.processImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = path.join(__dirname, '..', 'uploads', req.file.filename);

    // Process image using Tesseract OCR
    tesseract.recognize(imagePath, 'eng', {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      // Delete image after processing
      fs.unlinkSync(imagePath);

      // Send the recognized text as response
      return res.status(200).json({
        message: 'Image processed successfully',
        answer: text,
      });
    }).catch((err) => {
      console.error('Error processing image:', err);
      return res.status(500).json({ message: 'OCR processing failed' });
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
