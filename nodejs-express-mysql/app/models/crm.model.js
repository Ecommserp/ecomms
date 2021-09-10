const sql = require("./db.js");

// constructor
const CRM = function(crm) {



  this.Customer_NIC = crm.Customer_NIC;
  this.Birth_Date = crm.Birth_Date;
  this.Customer_name = crm.Customer_name;
  this.Email = crm.Email;
  this.Phone = crm.Phone;
  this.Address = crm.Address;
  this.Purchased_items = crm.Purchased_items;
  this.inquiry = crm.inquiry;
  this.inquiry_status = crm.inquiry_status;
};

CRM.create = (newCRM, result) => {
  //console.log(newCustomer)
  sql.query("INSERT INTO customers SET ?", newCRM, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created inquiry: ", { id: res.insertId, ...newCRM });
    result(null, { id: res.insertId, ...newCRM });
  });
};

CRM.findById = (customerId, result) => {
  sql.query(`SELECT * FROM users WHERE username = '${customerId}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

CRM.findByCat = (category, result) => {
  sql.query(`SELECT * FROM inventory WHERE Product_type = '${category}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

CRM.getAll = result => {
  sql.query("SELECT * FROM inventory", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

CRM.updateById = (id, customer, result) => {
  sql.query(
    "UPDATE users SET email = ?, name = ?, active = ? WHERE id = ?",
    [customer.email, customer.name, customer.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...customer });
      result(null, { id: id, ...customer });
    }
  );
};

CRM.remove = (id, result) => {
  sql.query("DELETE FROM inventory WHERE Product_ID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Item with id: ", id);
    result(null, res);
  });
};

CRM.removeAll = result => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = CRM;
