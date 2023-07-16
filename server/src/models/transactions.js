module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("transaction", {
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  return Transaction;
};
