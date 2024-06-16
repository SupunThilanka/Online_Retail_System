const express = require('express');
const cors = require('cors');
require('dotenv').config()
//--------------------------------------------------------
const SystemRoute = require('./routes/systemRoutes');


//---------------------------------------------------------

// Middleware and other configurations...
app.use(express.json()); // For parsing application/json
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Ignore /favicon.ico requests
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


//---------------------------------------------------------
app.use('/api/v1/', SystemRoute);
//---------------------------------------------------------


const port = process.env.PORT || 8081; 


app.listen(port,()=>{
    console.log("Server is running on ${port}")
});

// app.listen(8081,()=>{
//     console.log("Listning on port:8081")
// });

module.exports = app;

