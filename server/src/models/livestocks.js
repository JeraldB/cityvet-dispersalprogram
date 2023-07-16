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
      defaultValue: () => {
        const customId = String.fromCharCode(
          65 + Math.floor(Math.random() * 26)
        );
        const randomNum = String(Math.floor(Math.random() * 100)).padStart(
          2,
          "0"
        );
        return `20-${randomNum}${customId}`;
      },
    },
    animalType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isIn: [["male", "female"]],
      },
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    health: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isIn: [["Excellent", "fair", "poor"]],
      },
    },
    livestockStatus: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        isIn: [["alive", "deceased", "unknown"]],
      },
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.VIRTUAL,
      allowNull: true,
      get() {
        const dateOfBirth = this.getDataValue("dateOfBirth");
        if (!dateOfBirth) return null;

        const currentDate = new Date();
        const birthDate = new Date(dateOfBirth);
        const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
        const birthDateThisYear = new Date(
          currentDate.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate()
        );
        const hasHadBirthday = birthDateThisYear <= currentDate;

        return hasHadBirthday ? ageInYears : ageInYears - 1;
      },
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    isDispersed:{
      type:DataTypes.BOOLEAN,
     defaultValue:null,

  }
  });

  return Livestock;
};
