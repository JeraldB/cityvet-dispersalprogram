require("dotenv").config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.PASSWORD,
  DB: process.env.DB_DATABASE,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
