module.exports = (sequelize, DataTypes) => {
  const Benefeciary = sequelize.define("benefeciary", {
    benefeciaryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  });
  return Benefeciary;
};
