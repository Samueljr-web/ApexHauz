// require("dotenv").load();

const express = require("express");
const cors = require("cors");
const app = express();
const cloudinary = require("cloudinary");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({message: 'Welcome to ApexHauz'});
});

require("./src/routes/property.route")(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port https://${port}`);
});
