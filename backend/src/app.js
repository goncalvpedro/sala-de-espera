const bodyParser = require("body-parser");
const express = require("express");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Express is running as expected.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .send({
      error: "Unexpected condition made impossible to complete the request.",
    });
});

module.exports = app;
