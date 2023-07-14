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
db.benefeciary = require("./benefeciary")(sequelize, DataTypes);
db.admins = require("./admins")(sequelize, DataTypes);
db.livestock = require("./livestocks")(sequelize, DataTypes);
db.dispersal = require("./dispersal")(sequelize, DataTypes);
db.availments = require("./availments")(sequelize, DataTypes);
db.transaction = require("./transactions")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync");
});



// Add associations
db.users.hasOne(db.benefeciary, { foreignKey: "userId", as: "beneficiary" });
db.benefeciary.belongsTo(db.users, { foreignKey: "userId" });

db.users.hasMany(db.availments, { foreignKey: "userId", as: "availments" });
db.availments.belongsTo(db.users, { foreignKey: "userId", as: "user" });

module.exports = db;
