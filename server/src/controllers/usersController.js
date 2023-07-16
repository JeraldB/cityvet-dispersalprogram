const db = require('../models/connection');
const User = db.users
const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findByPk(userId);
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const { fullname, address, contact, birthDate, email } = req.body;

    const user = await User.findByPk(userId);
    user.fullname = fullname;
    user.address = address;
    user.contact = contact;
    user.birthDate = birthDate;
    user.email = email;

    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    await User.destroy({ where: { userId } });
    res.json({ message: 'Profile deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
