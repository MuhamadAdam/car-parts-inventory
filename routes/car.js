const express = require("express");

const {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  destroyCar,
} = require("../controllers/admin/car");

const car = express.Router();

car.route("/").get(getAllCars).post(createCar);
car.route("/:id").get(getCar).put(updateCar).delete(destroyCar);
