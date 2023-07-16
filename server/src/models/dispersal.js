module.exports = (sequelize, DataTypes) => {
  const Dispersal = sequelize.define("Dispersal", {
    dispersalDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
 
  });

  return Dispersal;
};
