const db = require("../models/connection");

const Users = db.users;

const Register = async (req, res) => {
  try {
    // Retrieve all Livestock records
    const users = await Users.findAll();

    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users." });
  }
};

module.exports = {
  Register,
};
