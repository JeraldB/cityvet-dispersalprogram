const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser =  require("cookie-parser")


const app = express();
app.use(cors({
  origin: 'http://localhost:8100', 
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


// config
const livestock = require("./src/api/livestocks");
const availment = require("./src/api/availments");
const benefeciaries = require("./src/api/benefeciaries");
const dispersal = require("./src/api/dispersal")
const auth = require("./src/api/auth")
const user = require("./src/api/userRoutes")

// API
app.use("/api/livestocks", livestock);
app.use("/api/availments", availment);
app.use("/api/benefeciaries", benefeciaries);
app.use("/api/dispers", dispersal)
app.use("/api/auth", auth)
app.use("/api/user", user)



app.listen(process.env.PORT, () => {
  console.log(`app is running on ${process.env.PORT}`);
});
