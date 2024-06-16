const express = require('express');
const cors = require('cors');
require('dotenv').config()
//--------------------------------------------------------
const SystemRoute = require('./routes/systemRoutes');


//---------------------------------------------------------

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/v1', (req, res, next) => {
    if (req.path === '/') {
        res.send('Server is running');
        console.log("Server is running on ${port}")
    } else {
        next();
    }
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

