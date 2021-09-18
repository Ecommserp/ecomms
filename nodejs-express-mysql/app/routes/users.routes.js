module.exports = app => {
  const customers = require("../controllers/users.controller.js");
  const inv = require("../controllers/inventory.controller.js");
  const bi = require("../controllers/bi.controller.js");
  const manu_prod = require("../controllers/manu_prod.controller.js");
  const macnin_prod = require("../controllers/macin_prod.controller");
  const pm = require("../controllers/P_M.controller.js");
  const sp = require("../controllers/sp.controller.js");
  const crmI = require("../controllers/crm.controller.js");
  const managingdb = require("../controllers/managingdb.controller.js");



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

  // Delete a product with id
  app.delete("/inventory/:Product_id", inv.delete_product);

  // Update a product id with productid
  app.put("/inventory/id/:Product_id", inv.updateid);

  // Update a product name with productid
  app.put("/inventory/name/:Product_id", inv.updatename);

  // Update a product id with productid
  app.put("/inventory/type/:Product_id", inv.updatetype);

  // Update a product id with productid
  app.put("/inventory/quantity/:Product_id", inv.updatequantity);

  // Retrieve BI for first graph
  app.get("/BI/rev", bi.findAll);

  // Retrieve purchased and production for first 3rd
  app.get("/BI/pp", bi.findAll_pp);

  // Retrieve meetings for popup
  app.get("/BI/meetings", bi.findAll_meet);

  // Retrieve meetings for popup
  app.post("/BI/meetings", bi.create_meet);

  // Retrieve a single meeting with meetingid
  app.get("/BI/meetings/:Meet_id", bi.findOne_meet);

  // Update a meetings with meetingid
  app.put("/BI/meetings/:Meet_id", bi.update_meet);

  // Delete a meeting with meetingid
  app.delete("/BI/meetings/:MeetID", bi.delete_meet);

  // Retrieve Manu for sample
  app.get("/manu/prod", manu_prod.findAll);
  // Retrieve all Customers
  app.get("/manu/manf", macnin_prod.findAll);

  // Retrieve Manu for sample
  app.post("/manu/prod", manu_prod.create);

    // Retrieve Manu for sample
  app.post("/manu/manf", macnin_prod.create);



  // Retrieve a single Customer with customerId
  app.get("/manu/:Product_ID", manu_prod.findOne);


  // Retrieve a single Customer with customerId
  app.get("/macnin_prod/:Machine_no", macnin_prod.findOne);


  // Update a Customer with customerId
  app.put("/manu_prod/:Product_ID", manu_prod.update);

  // Update a Customer with customerId
  app.put("/macnin_prod/:Product_ID", macnin_prod.update);

  // Delete a Customer with customerId
  app.delete("/manu_prod/:Machine_no", manu_prod.delete);

   // Delete a Customer with customerId
  app.delete("/macnin_prod/:Machine_no", macnin_prod.delete);

  // Delete a new Customer inquiry
  app.delete("/manu_prod", manu_prod.deleteAll);



     // Retrieve all purchases
     app.get("/purchases", pm.findAll);




     // Retrieve all suppliers
     app.get("/suppliers", sp.findAll);

     // Create a new supplier
     app.post("/suppliers", sp.create);

     // Create a new Invoice
     app.post("/account/invoice", managingdb.create);


   // Create a new Customer inquiry
   app.post("/crm/crm", crmI.create);

   // Retrieve all Customers inquiry
   app.get("/crm/crm", crmI.findAll);

   // Retrieve a single Customer with customerId
   app.get("/crm/crm/:Customer_NIC", crmI.findOne);

   // Update a Customer with customerId
   app.put("/crm/crm/:Customer_NIC", crmI.update);

   // Delete a Customer with customerId
   app.delete("/crmI/:Customer_NIC", crmI.delete);

   // Delete a new Customer inquiry
   app.delete("/crm", crmI.deleteAll);


   // Create a new invoice
   app.post("/acc/managingdb", managingdb.create);

   // Create a new invoice
   app.put("/acc/managingdb/:Invoice_ID", managingdb.update);

   // Create a new invoice
   app.get("/acc/managingdb/:Invoice_ID", managingdb.findOne);

};
