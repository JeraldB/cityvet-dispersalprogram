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

  updateBenefeciary: async (req, res) => {
    try {
      const { benefeciaryId } = req.params;
      const { fullname, address, contact, age, email, password } = req.body;

      const benefeciary = await Benefeciary.findByPk(benefeciaryId, {
        include: {
          model: User,
          as: "user",
        },
      });

      if (!benefeciary) {
        return res.status(404).json({ error: "Benefeciary not found" });
      }

      benefeciary.user.fullname = fullname;
      benefeciary.user.address = address;
      benefeciary.user.contact = contact;
      benefeciary.user.age = age;
      benefeciary.user.email = email;
      
      if (password) {
        benefeciary.user.password = password;
      }
      
      await benefeciary.user.save();

      res.status(200).json(benefeciary);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = benefeciaryController;