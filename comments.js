// Create web server
const express = require('express');
const app = express();
// Import body-parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');
// Import routes
const commentRoutes = require('./routes/comments');
// Import dotenv
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connect to MongoDB');
});

// Middleware
app.use(bodyParser.json());
app.use('/api/comments', commentRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});