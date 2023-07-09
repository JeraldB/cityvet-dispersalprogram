module.exports = (sequelize, DataTypes) => {
  const Livestock = sequelize.define("livestock", {
    livestockId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    earTag: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    animalType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Livestock;
};
