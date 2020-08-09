const express = require("express");

const {
  getAllModel,
  getModel,
  createModel,
  updateModel,
  destroyModel,
} = require("../controllers/admin/model");

const router = express.Router();

router.route("/").get(getAllModel).post(createModel);
router.route("/:id").get(getModel).put(updateModel).delete(destroyModel);

module.exports = router;
