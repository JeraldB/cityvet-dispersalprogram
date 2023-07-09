const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// router
const router = require("./api/livestockRoute");
app.use("/api/livestocks", router);

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
