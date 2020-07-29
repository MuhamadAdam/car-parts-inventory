const express = require("express");

const router = require("./routes/admin.js");
const app = express();
const port = 5000;

app.use("/admin", router);

app.listen(port, () => console.log("CPI"));
