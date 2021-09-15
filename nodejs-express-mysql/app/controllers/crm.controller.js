const CRM = require("../models/crm.model.js");


// Create and Save a new customer inquiry
exports.create = (req, res) => {
  console.log('request ' + req.body)
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  //Create a new customer inquiry

  const crmI = new CRM({
    Customer_NIC: req.body.Customer_NIC,
    Birth_Date: req.body.Birth_Date,
    Customer_name: req.body.Customer_name,
    Email: req.body.Email,
    Phone: req.body.Phone,
    Purchased_item: req.body.Purchased_item,
    inquiry: req.body.inquiry,
    inquiry_status: req.body.inquiry_status,
  });

  // Save customer inquiry in the database
  CRM.create(crmI, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating this inquiry."
      });
    else res.send(data);
  });
};

// Retrieve all Customers inquiry from the database.
exports.findAll = (req, res) => {
  CRM.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers inquiry."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customer nic
exports.findOne = (req, res) => {
  CRM.findById(req.params.Customer_NIC, (err, data) => {
     if (err) {
      if (err.kind === "not_found") {
         res.status(404).send({
           message: `Not found Customer with id ${req.params.Customer_NIC}.`
         });
       } else {
         res.status(500).send({
           message: "Error retrieving Customer with id " + req.params.Customer_NIC
         });
       }
    } else res.send(data);
   });
 };

// Find a single Customer with a customerId
// exports.find_cat = (req, res) => {
//   CRM.findByCat(req.params.crm_cat, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Customer with id ${req.params.customerId}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Customer with id " + req.params.customerId
//         });
//       }
//     } else res.send(data);
//   });
// };


// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }



  console.log(req.body);
  console.log(new CRM(req.body));

  CRM.updateById(
    req.params.Customer_NIC,
    new CRM(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.Customer_NIC}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Customer with id " + req.params.Customer_NIC
          });
        }
      } else res.send(data);
    }
  );
};

// Delete an Item with the specified Item_ID in the request
exports.delete = (req, res) => {
  CRM.remove(req.params.Customer_NIC, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Item with id ${req.params.Customer_NIC}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Item with id " + req.params.Customer_NIC
        });
      }
    } else res.send({ message: `Item was deleted successfully!` });
  });
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  Inventory.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all customers."
      });
    else res.send({ message: `All Customers were deleted successfully!` });
  });
};
