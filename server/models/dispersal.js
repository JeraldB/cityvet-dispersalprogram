module.exports = (sequelize, DataTypes) => {
  const Dispersal = sequelize.define("Dispersal", {
    dispersalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Dispersal;
};
