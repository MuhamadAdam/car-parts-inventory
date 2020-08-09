const express = require("express");

const {
  getAllCars,
  getCar,
  createCar,
  updateCar,
  destroyCar,
} = require("../controllers/admin/car");

const router = express.Router();

router.route("/").get(getAllCars).post(createCar);
router.route("/:id").get(getCar).put(updateCar).delete(destroyCar);

module.exports = router;
