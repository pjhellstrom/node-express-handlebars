// Import mysql
const mysql = require('mysql');

// Configure mysql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "r00tr00t",
    database: "burgers_db"
  });

// Export connection
module.exports =  connection;