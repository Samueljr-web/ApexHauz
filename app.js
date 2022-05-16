const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const authRoute = require('./src/routes/auth.route')
const propRoute = require('./src/routes/property.route')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/auth', authRoute, propRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "ApexHAuz Rest Api " });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    messgae: err.message
  })
  next()
})

module.exports = app;
