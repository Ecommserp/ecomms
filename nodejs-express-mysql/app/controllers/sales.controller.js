const Sales = require("../models/sales.model.js");
const Client = require("../models/client.model.js");



// Create and Save a new Sales
exports.create = (req, res) => {
    console.log('request ' + req.body)
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    // Create a Sales
    const sales = new Sales({
      Client_ID: req.body.clientid,
      Product_ID: req.body.productid,
      quantity: req.body.quantity
    });

    // Save Sales in the database
    Sales.create(sales, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the sales."
        });
      else res.send(data);
    });
  };

  // Retrieve all Customers from the database.
  exports.findAll_cli = (req, res) => {
    Sales.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  // Find a single Customer with a customerId
  exports.findOne_cli = (req, res) => {
    Sales.findById(req.params.Client_ID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.Client_ID}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.Client_ID
          });
        }
      } else res.send(data);
    });
  };

  // Update a client identified by the clientid in the request
  exports.update_cli = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    const client = new Client({
      name: req.body.name,
      contact: req.body.contact
    });

    console.log(req.body);

    Client.updateById(
      req.params.Client_ID,
      new Client(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.Client_ID}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.Client_ID
            });
          }
        } else res.send(data);
      }
    );
  };
