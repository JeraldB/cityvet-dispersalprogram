const jwt = require('jsonwebtoken');
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const accessToken = req.cookies.access_token;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
