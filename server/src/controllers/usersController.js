const db = require('../models/connection');
const User = db.users

const usersController = {
  getProfile: (req, res) => {
    const userId = req.user.userId;

    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  },

  updateProfile: (req, res) => {
    const userId = req.user.userId;
    const { fullname, address, contact, birthDate, userName, email } = req.body;

    User.update(
      { fullname, address, contact, birthDate, userName, email },
      { where: { userId } }
    )
      .then((result) => {
        if (result[0] === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "Profile updated successfully" });
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  },

  deleteProfile: (req, res) => {
    const userId = req.user.userId;

    User.destroy({ where: { userId } })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "Profile deleted successfully" });
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  },
  getUserById :(req, res) => {
    const userId = req.params.userId; // Assuming the userId is passed as a route parameter
  
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
  
        return res.json(user);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  },
};

module.exports = usersController;