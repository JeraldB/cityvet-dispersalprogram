const express = require("express");

require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("app is running");
});
