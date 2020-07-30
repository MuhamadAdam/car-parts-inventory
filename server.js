const express = require("express");

const carMake = require("./routes/carMake.js");
const app = express();
const port = 5000;

app.use("/admin/carMake", carMake);
app.use("/admin/model", model);
app.use("/admin/car", car);

app.listen(port, () => console.log("CPI"));
