const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const SystemRoute = require('./routes/systemRoutes');

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to handle /favicon.ico request
app.get('/favicon.ico', (req, res) => res.status(204));

// Root route handler for /api/v1
app.get('/api/v1', (req, res) => {
    res.send('Server is running');
});

// Use the SystemRoute for other /api/v1 routes
app.use('/api/v1', SystemRoute);

// Catch-all route for undefined routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
