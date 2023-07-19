const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
  return accessToken;
};

const generateRefreshToken = (userId) => {
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
