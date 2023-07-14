const db = require("../models/connection");
const Benefeciary = db.benefeciary;
const User = db.users;

const benefeciaryController = {
  getAllBenefeciaries: async (req, res) => {
    try {
      const benefeciaries = await Benefeciary.findAll({
        include: {
          model: User,
          as: "user",
        },
      });

      res.status(200).json(benefeciaries);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = benefeciaryController;