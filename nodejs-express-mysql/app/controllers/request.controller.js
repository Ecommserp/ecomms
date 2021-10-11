// Create and Save a new Item
exports.create = (req, res) => {
    console.log('request ' + req.body)
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    //Create a new Item
    const request = new Request({
      Product_name: req.body.name,
      Product_type: req.body.type,
      quantity: req.body.quantity,
    });
  
    // Save Item in the database
    Request.create(inventory, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating this Item."
        });
      else res.send(data);
    });
  };