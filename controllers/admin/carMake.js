const CarMake = require("../../models/CarMake");

exports.getAllCarMake = (req, res, next) => {
  // res.send("All car make");
  CarMake.findAll()
    .then((carsMake) => {
      res.send(carsMake);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCarMake = (req, res, next) => {
  const makeId = req.params.id;
  CarMake.findByPk(makeId).then((carMake) => {
    res.send(carMake);
  });
};

exports.createCarMake = (req, res, next) => {
  const name = req.body.name;
  const country = req.body.country;

  CarMake.create({
    name: name,
    country: country,
  })
    .then((result) => {
      res.send("object created");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateCarMake = (req, res, next) => {
  const makeId = req.params.id;
  const makeName = req.body.name;
  const country = req.body.country;

  CarMake.findByPk(makeId)
    .then((carMake) => {
      carMake.name = makeName;
      carMake.country = country;
      return carMake.save();
    })
    .then(() => {
      res.send("update car make");
    })
    .catch((err) => console.log(err));
};

exports.destroyCarMake = (req, res, next) => {
  const makeId = req.params.id;

  CarMake.findByPk(makeId)
    .then((carMake) => {
      return carMake.destroy();
    })
    .then(() => {
      res.send("Destroy car make");
    });
};
