const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db_name",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected successfully");
});

module.exports = connection;
