
require("dotenv").config();

// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USR,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME
});

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
