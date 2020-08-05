exports.getAllCars = (req, res, next) => {};

exports.getCar = (req, res, next) => {
  res.send("one car ");
};

exports.createCar = (req, res, next) => {
  res.send("create car ");
};

exports.updateCar = (req, res, next) => {
  res.send("update car ");
};

exports.destroyCar = (req, res, next) => {
  res.send("Destroy car ");
};
