//const BI = require("../models/bi.model.js");
const macnin_prod_m = require("../models/macin_prod.model.js");


// Create and Save a new Customer
exports.create = (req, res) => {
  console.log('request ' + req.body)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Production
  const macnin_prod = new macnin_prod_m({
    Machine_no:req.Machine_no,
    name: req.body.name,
    Machine_stat: req.body.Machine_stat,
    //Production_stat: req.body.Production_stat,
    //Machine_no: req.body.Machine_no,
  });

  // Save Customer in the database
  macnin_prod_m.create(macnin_prod, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer."
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  macnin_prod_m.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving manufacturing Products."
      });
    else res.send(data);
  });
};


// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  macnin_prod_m.findById(req.params.Machine_no, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Machine with id ${req.params.Machine_no}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.Machine_no
        });
      }
    } else res.send(data);
  });
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  macnin_prod_m.updateById(
    req.params.Machine_no,
    new macnin_prod_m(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.Machine_no}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.Machine_no
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Product with the specified ProductId in the request
exports.delete = (req, res) => {
  macnin_prod_m.remove(req.params.Machine_no, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.Machine_no}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Customer with id " + req.params.Machine_no
        });
      }
    } else res.send({ message: `Manufatuting Product was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  macnin_prod_m.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};