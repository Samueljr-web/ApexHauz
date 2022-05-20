const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT || 3001;

const authRoute = require("./src/routes/auth.route");
const propRoute = require("./src/routes/property.route");
const reportsRoute = require("./src/routes/reports.route");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", authRoute, propRoute, reportsRoute);

app.get("/", (req, res) => {
  res.status(200).send("ApexHauz Rest Api ready to use...");
});

app.use((err, _, res, next) => {
  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
