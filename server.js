// require("dotenv").load();

const express = require("express");
const app = express();
const cloudinary = require("cloudinary");

const port = 3000;

app.get("/", (req, res, next) => {
  res.send("ApexZeux");
  next();
});

app.listen(port, () => {
  console.log(`server listening on port https://${port}`);
});
