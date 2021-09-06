module.exports = app => {
  const customers = require("../controllers/users.controller.js");
  const inv = require("../controllers/inventory.controller.js");
  const bi = require("../controllers/bi.controller.js");
  const pm = require("../controllers/P_M.controller.js");
  const sp = require("../controllers/sp.controller.js");

  // Create a new Customer
  app.post("/users", customers.create);

  // Retrieve all Customers
  app.get("/users", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/users/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/users/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/users/:customerId", customers.delete);

  // Delete a new Customer
  app.delete("/users", customers.deleteAll);

   // Create a new Item
   app.post("/inventory", inv.create);

   // Delete a Customer with customerId
  app.delete("/inventory/:itemId", inv.delete);

  // Retrieve all Customers
  app.get("/inventory", inv.findAll);

  // Retrieve a Items for category
  app.get("/inventory/:itm_cat", inv.find_cat);

  // Retrieve BI for first graph
  app.get("/BI/rev", bi.findAll);


  // Retrieve all purchases
  app.get("/purchases", pm.findAll);




  // Retrieve all suppliers
  app.get("/suppliers", sp.findAll);



};
