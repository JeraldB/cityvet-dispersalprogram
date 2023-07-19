const db = require("../models/connection")
const User = db.users
const Admin = db.admins
const bcrypt = require("bcrypt");
const { generateAccessToken, generateRefreshToken } = require("../global/utils/jwt");

const authController = {
  loginUser: (req, res) => {
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

          const accessToken = generateAccessToken(user.userId, "user");
          const refreshToken = generateRefreshToken(user.userId, "user");

          res.cookie("access_token", accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000, // 15 minutes
          });

          res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          });

          return res.json({ message: "Authentication successful" });
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

          res.cookie("access_token", accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000, // 15 minutes
          });

          res.cookie("refresh_token", refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          });

          return res.json({ message: "User registered successfully" });
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
};

module.exports = authController