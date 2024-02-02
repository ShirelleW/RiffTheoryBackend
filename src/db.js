const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rifftheoryscales", "sa", "Password1", {
  host: "localhost",
  dialect: "mssql"
});

module.exports = sequelize;