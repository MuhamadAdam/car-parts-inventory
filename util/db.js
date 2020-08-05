const Sequelize = require("sequelize");

const sequelize = new Sequelize("CPI", "postgres", "Bully1998", {
  dialect: "postgres",
});

module.exports = sequelize;
