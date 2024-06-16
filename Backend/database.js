
// const connection = mysql.createPool({
    //     connectionLimit: 10,
    //     host:"localhost",
    //     user : "root",
    //     password: "",
    //     database: "retail_system",
    //     multipleStatements: true // Enable multi-queries
    // });
    /*const connection = mysql.createPool({
        connectionLimit: 10,
        host:"bn67knmccgxrvirziqjl-mysql.services.clever-cloud.com",
        user : "uxgx469bkivxrdm5",
        password: "7t1sxm4EAbVO4ivcBOIR",
        database: "bn67knmccgxrvirziqjl"
        });*/

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST, 
//     user: process.env.DB_USERNAME, 
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// // Attempt to connect to the database
// pool.getConnection((err, connection) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('Connected to the database!');
//     connection.release(); // Release the connection back to the pool
// });

// module.exports = pool;

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Attempt to connect to the database
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database!');
    connection.release(); // Release the connection back to the pool
});

module.exports = pool;
