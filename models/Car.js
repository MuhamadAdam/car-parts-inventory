const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Car = sequelize.define("car", {
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
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model_id: {
    type: Sequelize.INTEGER,
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
  car_type: {
    type: Sequelize.STRING,
  },
  model_year: {
    type: "TIMESTAMP",
  },
});

module.exports = Car;
