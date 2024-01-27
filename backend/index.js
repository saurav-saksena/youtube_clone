const express = require("express");
const app = express();
const connectMongo = require("./dbconnection");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send(
    "<h1>This is backend for you tube clone running by kumar_saurav_saksena !</h1>"
  );
});
app.listen(8000, () => {
  connectMongo();
  console.log("application is running on port http://localhost:8000");
});
