const mysql = require("mysql");

const { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER, DB_DATABASE } = process.env;

const createTable = (data) => {
  data.forEach(({ name, query }) => {
    var sql = `CREATE TABLE ${name} (${query})`;
    connection.query(sql, function (err, result) {
      if (err && err.code !== "ER_TABLE_EXISTS_ERROR") throw err.sqlMessage;
    });
  });
};

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

connection.connect(function (err) {
  if (err) throw err;
  // Create database
  // connection.query(`CREATE DATABASE ${DB_DATABASE}`, function (err, result) {
  //   if (err && err.code !== "ER_DB_CREATE_EXISTS") throw err.sqlMessage;
  // });
  createTable([
    {
      name: "users",
      query:
        "id int AUTO_INCREMENT, email varchar(100), first_name varchar(100), last_name varchar(100), password varchar(100), phone int, address varchar(100), is_admin boolean DEFAULT false, created_on timestamp DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id)",
    },
    {
      name: "properties",
      query:
        "id int AUTO_INCREMENT, owner int, status varchar(100) DEFAULT 'available', price float, state varchar(100), city varchar(100), address varchar(100), type varchar(100), image_url varchar(100),  created_on timestamp DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id), FOREIGN KEY(owner) REFERENCES users(id)",
    },
    {
      name: "reports",
      query:
        "id int AUTO_INCREMENT, property_id int,  created_on timestamp DEFAULT CURRENT_TIMESTAMP, reason varchar(255), description varchar(355), PRIMARY KEY(id), FOREIGN KEY(property_id) REFERENCES properties(id)",
    },
  ]);
  console.log("Database connected successfully");
});

module.exports = connection;
