const mysql = require('mysql2');

const connection = mysql.createPool({
    connectionLimit: 10,
    host:"localhost",
    user : "root",
    password: "",
    database: "retail_system",
    multipleStatements: true // Enable multi-queries
});
/*const connection = mysql.createPool({
    connectionLimit: 10,
    host:"bn67knmccgxrvirziqjl-mysql.services.clever-cloud.com",
    user : "uxgx469bkivxrdm5",
    password: "7t1sxm4EAbVO4ivcBOIR",
    database: "bn67knmccgxrvirziqjl"
});*/
// const pool = mysql.createPool({
//     host: process.env.DB_HOST, 
//     user: process.env.DB_USERNAME, 
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// Attempt to connect to the database
connection.getConnection((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = connection;
