const Sales = require("../models/sales.model.js");


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