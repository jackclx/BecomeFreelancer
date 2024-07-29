require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const dbURI = process.env.MONGO_URI;
if (!dbURI) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1);
}

mongoose.connect(dbURI, {})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const users = require('./routes/users');
app.use('/api/users', users);

const freelancers = require('./routes/freelancers');
app.use('/api/freelancers', freelancers);

const admin = require('./routes/admin'); // Import the new admin route
app.use('/api/admin', admin); // Use the new admin route

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});