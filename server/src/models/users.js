module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  User.beforeSave(async (user, options) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthDate = new Date(user.birthDate);
  
    // Update the birthDate to the current year
    birthDate.setFullYear(currentYear);
  
    user.birthDate = birthDate;
  });
  
  return User;
};
