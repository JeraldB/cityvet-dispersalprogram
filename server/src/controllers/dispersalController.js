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
  getDispersedLivestockForBeneficiary: async (req, res) => {
    try {
      const { benefeciaryId } = req.params;
      const beneficiary = await Beneficiary.findByPk(benefeciaryId, {
        include: [
          {
            model: Livestock,
            where: { isDispersed: true }, 
          },
        ],
      });

      if (!beneficiary) {
        return res.status(404).json({ error: "Beneficiary not found" });
      }

      const dispersedLivestock = beneficiary.livestocks; // Assuming you have defined 'livestocks' as the name of the association in the Beneficiary model.

      res.status(200).json({ livestock: dispersedLivestock });
    } catch (error) {
      console.error("Error fetching dispersed livestock:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getAllTransactionsForUser: async (req, res) => {
    const userId = req.userId; // Assuming you have the userId available in the request

    try {
      // Fetch all transactions associated with the specified user
      const transactions = await Transaction.findAll({
        include: {
          model: Beneficiary,
          where: { userId }, 
        },
      });

      res.status(200).json(transactions);
    } catch (error) {
      console.error('Error fetching transactions for user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = dispersalController;