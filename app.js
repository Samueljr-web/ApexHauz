const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const authRoute = require('./src/routes/auth.route')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Apexzeux Rest Api " });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    messgae: err.message
  })
  next()
})

module.exports = app;
