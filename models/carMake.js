const Sequelize = require("sezuelize");

const sequelize = require("../util/db");

const CarMake = sequelize.define("carMake", {
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
  country: Sequelize.STRING,
});

module.exports = CarMake;
