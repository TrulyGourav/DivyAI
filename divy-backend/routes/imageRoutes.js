const express = require('express');
const multer = require('multer');
const { processImage } = require('../controllers/imageController');

const router = express.Router();

// Setup multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Define routes
router.post('/process-image', upload.single('image'), processImage);

module.exports = router;
