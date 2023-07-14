module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("transaction", {
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });
  return Transaction;
};
