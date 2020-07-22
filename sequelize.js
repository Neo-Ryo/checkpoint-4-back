require("dotenv").config();
const Sequelize = require("sequelize");

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env;

module.exports = new Sequelize({
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  dialect: DB_DIALECT,
  logging: false,
});
