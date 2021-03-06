const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Model = sequelize.define("model", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  make: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  make_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  starting_year: {
    type: "TIMESTAMP",
    allowNull: true,
  },
});

module.exports = Model;
