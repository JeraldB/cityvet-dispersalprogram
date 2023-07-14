const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const livestock = require("./api/livestockRoute");
const availment = require("./api/availmentRoute");

// API
app.use("/api/livestocks", livestock);
app.use("/api/availments", availment);

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
