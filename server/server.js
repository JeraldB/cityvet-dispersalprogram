const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const livestock = require("./api/livestocks");
const availment = require("./api/availments");
const benefeciaries = require("./api/benefeciaries");
const dispersal = require("./api/dispersal")

// API
app.use("/api/livestocks", livestock);
app.use("/api/availments", availment);
app.use("/api/benefeciaries", benefeciaries);
app.use("/api/dispers", dispersal)


app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
