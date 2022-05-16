const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ApexHauz_API",
  port: '/var/run/mysqld/mysqld.sock'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected successfully");
});

module.exports = connection;