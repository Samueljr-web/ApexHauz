const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  // password: "password",
  database: "ApexHauz_API",
  port: 3306,
  // port: '/var/run/mysqld/mysqld.sock'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected successfully");
});

module.exports = connection;
