const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const SystemRoute = require('./routes/systemRoutes');

const app = express();

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());


// Root route handler for /api/v1
app.get('/api/v1', (req, res) => {
    res.send('Server is running');
});

// Use the SystemRoute for other /api/v1 routes
app.use('/api/v1', SystemRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
