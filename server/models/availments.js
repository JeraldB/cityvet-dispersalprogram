module.exports = (sequelize, DataTypes) => {
  const Availment = sequelize.define("availment", {
    availmentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    referralLetter:{
        type:DataTypes.STRING(50),
        allowNull:false

    },
    residentCertificate:{
        type:DataTypes.STRING(50),
        allowNull:false

    },
    isAccepted:{
        type:DataTypes.BOOLEAN,
       defaultValue:null,

    }
  });

  Availment.associate = (models) => {
    Availment.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return Availment;
};
