const db = require("../models/connection");

const Livestock = db.livestock;

const addLivestock = async (req, res) => {
  try {
    const { gender, health, livestockStatus, breed, animalType, dateOfBirth } =
      req.body;

    // Create a new Livestock record
    const livestock = await Livestock.create({
      gender,
      health,
      livestockStatus,
      breed,
      animalType,
      dateOfBirth,
    });

    res.status(201).json({ livestock });
  } catch (error) {
    console.log("error adding the livestock", error);
    res.status(500).json({ message: "failed to add the livestock" });
  }
};

const getAllLivestock = async (req, res) => {
  try {
    // Retrieve all Livestock records
    const livestock = await Livestock.findAll();

    res.status(200).json({ livestock });
  } catch (error) {
    console.error("Error fetching livestock:", error);
    res.status(500).json({ message: "Failed to fetch livestock." });
  }
};

// specific id
const getLivestockById = async (req, res) => {
  try {
    const { livestockId } = req.params;

    // Retrieve the Livestock record by its livestockId
    const livestock = await Livestock.findByPk(livestockId);

    if (!livestock) {
      return res.status(404).json({ message: "Livestock not found." });
    }

    res.status(200).json({ livestock });
  } catch (error) {
    console.error("Error fetching livestock:", error);
    res.status(500).json({ message: "Failed to fetch livestock." });
  }
};

const updateLivestock = async (req, res) => {
  try {
    const { livestockId } = req.params;
    const {
      gender,
      health,
      livestockStatus,
      breed,
      animalType,
      dateOfBirth,
      age,
      weight,
      height,
    } = req.body;

    // Find the Livestock record by livestockId
    const livestock = await Livestock.findByPk(livestockId);

    if (!livestock) {
      return res.status(404).json({ message: "Livestock not found" });
    }

    // Update the Livestock record

    livestock.gender = gender;
    livestock.health = health;
    livestock.livestockStatus = livestockStatus;
    livestock.breed = breed;
    livestock.animalType = animalType;
    livestock.dateOfBirth = dateOfBirth;
    livestock.age = age;
    livestock.weight = weight;
    livestock.height = height;

    await livestock.save();

    res.status(200).json({ livestock });
  } catch (error) {
    console.error("Error updating livestock:", error);
    res.status(500).json({ message: "Failed to update livestock" });
  }
};

module.exports = {
  addLivestock,
  getAllLivestock,
  getLivestockById,
  updateLivestock,
};
