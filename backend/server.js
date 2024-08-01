require('dotenv').config(); // Ensure this line is at the top

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware to log request headers
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    next();
});

// MongoDB connection string
const dbURI = process.env.MONGO_URI;
if (!dbURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1);
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
const users = require('./routes/users');
app.use('/api/users', users);

const freelancers = require('./routes/freelancers');
app.use('/api/freelancers', freelancers);

const admin = require('./routes/admin');
app.use('/api/admin', admin);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
