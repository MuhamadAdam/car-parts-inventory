const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const sequelize = require("./util/db");

const carMake = require("./routes/carMake.js");
const car = require("./routes/car.js");
const model = require("./routes/model.js");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use("/admin/carMake", carMake);
app.use("/admin/model", model);
app.use("/admin/car", car);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log("CPI"));
  })
  .catch((err) => {
    console.log(err);
  });
