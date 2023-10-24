const db = require("../models/connection")
const User = db.users
const Admin = db.admins
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../global/utils/jwt");

const authController = {
  loginUser : (req, res) => {
    const { email, password } = req.body;
  
    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
  
        bcrypt.compare(password, user.password, (err, result) => {
          if (err || !result) {
            return res.status(401).json({ message: "Authentication failed" });
          }
  
          // Generate the JWT tokens
          const accessToken = generateAccessToken(user.userId);
          const refreshToken = generateRefreshToken(user.userId);
  
          return res.json({ accessToken, refreshToken }); // Return tokens in the response
        });
      })
      .catch((err) => {
        console.error("Error authenticating user:", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  },

  registerUser: (req, res) => {
    const { fullname, address, contact, birthDate, userName, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      User.create({
        fullname,
        address,
        contact,
        birthDate,
        userName,
        email,
        password: hash,
      })
        .then((user) => {
          const accessToken = generateAccessToken(user.userId, "user");
          const refreshToken = generateRefreshToken(user.userId, "user");

          return res.json({ accessToken, refreshToken }); // Return tokens in the response body
        })
        .catch((err) => {
          console.error("Error registering user:", err);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
  },

  registerAdmin: (req, res) => {
    const { userName, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }

      Admin.create({
        userName,
        email,
        password: hash,
      })
        .then((admin) => {
          const accessToken = generateAccessToken(admin.adminId, "admin");
          const refreshToken = generateRefreshToken(admin.adminId, "admin");

          res.cookie("access_token", accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000, // 15 minutes
          });

          res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          });

          return res.json({ message: "Admin registered successfully" });
        })
        .catch((err) => {
          console.error("Error registering admin:", err);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
  },
  loginAdmin: (req, res) => {
    const { email, password } = req.body;

    // Find the admin user by email in the database
    Admin.findOne({ where: { email } })
      .then((admin) => {
        if (!admin) {
          return res.status(404).json({ message: 'Admin not found' });
        }

        // Compare the provided password with the hashed password in the database
        bcrypt.compare(password, admin.password, (err, result) => {
          if (err || !result) {
            return res.status(401).json({ message: 'Authentication failed' });
          }

          // Generate the JWT tokens for the authenticated admin
          const accessToken = generateAccessToken(admin.adminId, 'admin');
          const refreshToken = generateRefreshToken(admin.adminId, 'admin');

          return res.json({ accessToken, refreshToken, message: 'Admin login successful' });
        });
      })
      .catch((err) => {
        console.error('Error logging in admin:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      });
  },

};

module.exports = authController