const express = require('express');
const cors = require('cors');
require('dotenv').config()
//--------------------------------------------------------
const SystemRoute = require('./routes/systemRoutes');


//---------------------------------------------------------


const app = express();
app.use(cors());

app.use(express.json());

//---------------------------------------------------------
app.use('/api/v1/', SystemRoute);
//---------------------------------------------------------


const port = process.env.PORT || 8080; 


app.listen(port,()=>{
    console.log("Server is running")
});

// app.listen(8081,()=>{
//     console.log("Listning on port:8081")
// });

// module.exports = app;

