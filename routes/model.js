const express = require("express");

const {
  getAllModel,
  getModel,
  createModel,
  updateModel,
  destroyModel,
} = require("../controllers/admin/model");

const model = express.Router();

model.route("/").get(getAllModel).post(createModel);
model.route("/:id").get(getModel).put(updateModel).delete(destroyModel);
