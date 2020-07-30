const express = require("express");

const {
  getAllCarMake,
  getCarMake,
  createCarMake,
  updateCarMake,
  destroyCarMake,
} = require("../controllers/admin/carMake");

const router = express.Router();

router.route("/").get(getAllCarMake).post(createCarMake);
router.route("/:id").get(getCarMake).put(updateCarMake).delete(destroyCarMake);

module.exports = carMake;
