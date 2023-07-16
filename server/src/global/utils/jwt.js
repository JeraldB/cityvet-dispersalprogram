const jwt = require("jsonwebtoken")
require("dotenv").config()

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

const accessTokenExpiresIn = '1hr'; // Access token expiration time (e.g., 1hour)
const refreshTokenExpiresIn = '7d'; // Refresh token expiration time (e.g., 7 days)

exports.AccessToken = (payload, userName, isUser = true) => {
    const defaultPayload = {
      role: isUser ? 'user' : 'admin',
      userName: userName,
    };
  
    const mergedPayload = { ...defaultPayload, ...payload };
  
    const token = jwt.sign(mergedPayload, accessTokenSecret, { expiresIn: accessTokenExpiresIn });
    return token;
  };
  
  exports.RefreshToken = (payload) => {
    const token = jwt.sign(payload, refreshTokenSecret, { expiresIn: refreshTokenExpiresIn });
    return token;
  };
  
  exports.verifyAccessToken = (token) => {
    try {
      const decoded = jwt.verify(token, accessTokenSecret);
      return decoded;
    } catch (err) {
      return null;
    }
  };
  
  exports.verifyRefreshToken = (token) => {
    try {
      const decoded = jwt.verify(token, refreshTokenSecret);
      return decoded;
    } catch (err) {
      return null;
    }
  };