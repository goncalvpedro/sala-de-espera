const { Sequelize } = require("sequelize");
const config = require("./src/config/config").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "postgres",
    define: config.define,
  }
);

module.exports = sequelize;
