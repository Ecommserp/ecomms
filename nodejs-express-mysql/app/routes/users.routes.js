module.exports = app => {
  const customers = require("../controllers/users.controller.js");
  const inv = require("../controllers/inventory.controller.js");
  const bi = require("../controllers/bi.controller.js");
  const manu_prod = require("../controllers/manu_prod.controller.js");
  const pm = require("../controllers/P_M.controller.js");
  const sp = require("../controllers/sp.controller.js");
  const crm = require("../controllers/crm.controller.js");


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

  // Retrieve all Customers
  app.get("/inventory", inv.findAll);

  // Retrieve a Items for category
  app.get("/inventory/:itm_cat", inv.find_cat);

  // Retrieve BI for first graph
  app.get("/BI/rev", bi.findAll);

  // Retrieve meetings for popup
  app.get("/BI/meetings", bi.findAll_meet);

  // Retrieve Manu for sample
  app.get("/manu/prod", manu_prod.findAll);

   // Retrieve Manu for sample
   app.post("/manu/prod", manu_prod.create);


   // Create a new Customer inquiry
   app.post("/crm", crm.create);

   // Retrieve all Customers inquiry
   app.get("/crm", crm.findAll);

   // Retrieve a single Customer with customerId
   app.get("/crm/:customerId", crm.findOne);

   // Update a Customer with customerId
   app.put("/crm/:customerId", crm.update);

   // Delete a Customer with customerId
   app.delete("/crm/:customerId", crm.delete);

   // Delete a new Customer inquiry
   app.delete("/crm", crm.deleteAll);


     // Retrieve all purchases
     app.get("/purchases", pm.findAll);


   

     // Retrieve all suppliers
     app.get("/suppliers", sp.findAll);

     // Create a new supplier
     app.post("/suppliers", sp.create);




};
