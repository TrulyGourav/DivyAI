const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { errorHandler } = require('./utils/errorHandler');
const imageRoutes = require('./routes/imageRoutes');

// Initialize environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Image upload route
app.use('/api', imageRoutes);

// Error handling middleware
app.use(errorHandler);

// Static file for images (if needed)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
