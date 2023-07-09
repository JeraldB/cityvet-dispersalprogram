const dbConfig = require("../config/dbConfig");
require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log(`connected ...`);
  })
  .catch((err) => {
    console.log(`error` + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users")(sequelize, DataTypes);
db.admins = require("./admins")(sequelize, DataTypes);
db.livestock = require("./livestocks")(sequelize, DataTypes);
db.dispersal = require("./dispersal")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync");
});

// associations
// Dispersal.belongsTo(Beneficiary);
// Dispersal.belongsTo(Livestock);
// Dispersal.belongsTo(Admin);
// Beneficiary.hasMany(Dispersal);
// Livestock.hasMany(Dispersal);

module.exports = db;
