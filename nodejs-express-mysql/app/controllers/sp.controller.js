const SP = require("../models/sp.model.js");


exports.findAll = (req, res) => {
  SP.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};



exports.create = (req, res) => {
  console.log('request ' + req.body)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //Create a new Item
  const sp = new SP({
    name: req.body.name,
    contact: req.body.contact,

  });

  // Save Item in the database
  SP.create(sp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating this Item."
      });
    else res.send(data);
  });
};
