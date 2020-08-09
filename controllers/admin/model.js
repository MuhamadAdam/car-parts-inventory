const Model = require("../../models/Model");

exports.getAllModel = (req, res, next) => {
  res.send("All car make");
};

exports.getModel = (req, res, next) => {
  res.send("one car make");
};

exports.createModel = (req, res, next) => {
  res.send("create car make");
};

exports.updateModel = (req, res, next) => {
  res.send("update car make");
};

exports.destroyModel = (req, res, next) => {
  res.send("Destroy car make");
};
