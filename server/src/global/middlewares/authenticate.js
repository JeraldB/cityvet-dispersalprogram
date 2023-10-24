const jwt = require('jsonwebtoken');
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorizationHeader.split('Bearer ')[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
    if (err) {
      // If access token is invalid or expired, check for a refresh token
      const refreshToken = req.headers['x-refresh-token'];

      if (!refreshToken) {
        return res.status(403).json({ message: "Forbidden - Refresh token not provided" });
      }

      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decodedRefreshToken) => {
        if (err) {
          return res.status(403).json({ message: "Forbidden - Invalid or expired refresh token" });
        }

        // Refresh token is valid, use the user ID from the refresh token to generate new access token
        const userId = decodedRefreshToken.userId;

        // Generate new access token
        const newAccessToken = generateAccessToken(userId);

        // Attach the new access token to the response headers
        res.set('Authorization', `Bearer ${newAccessToken}`);

        // Store the user data in req.user and move to the next middleware/route
        req.user = { userId };
        next();
      });
    } else {
      // Access token is valid, store the user data in req.user and move to the next middleware/route
      req.user = decodedToken; // Assuming the decodedToken contains the necessary user information (e.g., user ID or email)
      next();
    }
  });
};

module.exports = { authenticateToken };
