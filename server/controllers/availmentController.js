const db = require("../models/connection");
const Availment = db.availments;
const Beneficiary = db.benefeciary;
const User = db.users;

const availmentController = {
  createAvailment: async (req, res) => {
    try {
      const { userId, description, referralLetter, residentCertificate } = req.body;

      // Create the availment
      const availment = await Availment.create({
        description,
        referralLetter,
        residentCertificate,
        isAccepted: null,
        userId: userId,
      });

      res.status(201).json(availment);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  acceptAvailment: async (req, res) => {
    try {
      const { availmentId } = req.params;

      // Find the availment
      const availment = await Availment.findByPk(availmentId);

      if (!availment) {
        return res.status(404).json({ error: "Availment not found" });
      }

      // Update the availment
      availment.isAccepted = true;
      await availment.save();

      // Associate the user with beneficiary
      const user = await User.findByPk(availment.userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Check if the user is already a beneficiary
      const beneficiary = await Beneficiary.findOne({
        where: { userId: user.userId },
      });
      if (beneficiary) {
        return res.status(400).json({ error: "User is already a beneficiary" });
      }

      // Create beneficiary association
      await Beneficiary.create({ userId: user.userId });

      res.status(200).json({ message: "Availment accepted", availment });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  rejectAvailment: async (req, res) => {
    try {
      const { availmentId } = req.params;

      // Find the availment
      const availment = await Availment.findByPk(availmentId);

      if (!availment) {
        return res.status(404).json({ error: "Availment not found" });
      }

      // Update the availment
      availment.isAccepted = false;
      await availment.save();

      res.status(200).json(availment);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getAllAvailments: async (req, res) => {
    try {
      // Retrieve all availments
      const availments = await Availment.findAll();

      res.status(200).json(availments);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  editAvailment: async (req, res) => {
    try {
      const { availmentId } = req.params;
      const { description, referralLetter, residentCertificate } = req.body;

      // Find the availment
      const availment = await Availment.findByPk(availmentId);

      if (!availment) {
        return res.status(404).json({ error: "Availment not found" });
      }

      // Update the availment
      availment.description = description;
      availment.referralLetter = referralLetter;
      availment.residentCertificate = residentCertificate;
      await availment.save();

      res.status(200).json(availment);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = availmentController;