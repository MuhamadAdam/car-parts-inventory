const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Model = sequelize.define("Model", {
  id: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Model;
