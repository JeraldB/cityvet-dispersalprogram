const db = require("../models/connection");
const Dispersal = db.dispersal;
const Beneficiary = db.benefeciary;
const Livestock = db.livestock;
const Transaction = db.transaction

const dispersalController = {
  disperseLivestock: async (req, res) => {
    try {
      const { benefeciaryId, livestockId, description } = req.body;
      const livestock = await Livestock.findByPk(livestockId);
      if (livestock.isDispersed) {
        return res.status(400).json({ error: 'Livestock already dispersed' });
      }
      const beneficiary = await Beneficiary.findByPk(benefeciaryId);
      if (!beneficiary) {
        return res.status(404).json({ error: 'Beneficiary not found' });
      }
      const transaction = await Transaction.sequelize.transaction();

      try {
        const dispersal = await Dispersal.create({ benefeciaryId, livestockId }, { transaction });
        livestock.isDispersed = true;
        await livestock.save({ transaction });

        const transactionRecord = await Transaction.create({ benefeciaryId, description, dispersalId: dispersal.id }, { transaction });

        // Commit transaction
        await transaction.commit();

        res.status(201).json({ dispersal, transaction: transactionRecord });
      } catch (error) {
        // Rollback the transaction there's something wrong or error
        await transaction.rollback();
        throw error;
      }
    } catch (error) {
      console.error('Error dispersing livestock:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = dispersalController;