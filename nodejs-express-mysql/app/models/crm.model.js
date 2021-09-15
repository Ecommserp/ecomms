const sql = require("./db.js");

// constructor
const Customers = function(crm) {

  this.Customer_NIC = crm.Customer_NIC;
  this.Birth_Date = crm.Birth_Date;
  this.Customer_name = crm.Customer_name;
  this.Email = crm.Email;
  this.Phone = crm.Phone;
  this.Purchased_item = crm.Purchased_item;
  this.inquiry = crm.inquiry;
  this.inquiry_status = crm.inquiry_status;
};


Customers.create = (newCRM, result) => {
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

Customers.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE Customer_NIC = '${customerId}'`, (err, res) => {
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

// Customers.findByCat = (category, result) => {
//   sql.query(`SELECT * FROM customers WHERE Product_type = '${category}'`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found customer: ", res);
//       result(null, res);
//       return;
//     }

//     // not found Customer with the id
//     result({ kind: "not_found" }, null);
//   });
// };

Customers.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Customers.updateById = (id, customer, result) => {
  //console.log(customer)
  sql.query(
    "UPDATE customers SET Customer_name = ?, Birth_Date = ?, Email = ?, Phone = ?, Purchased_item = ?, inquiry = ?, inquiry_status = ? WHERE Customer_NIC = ?",
    [customer.Customer_name, customer.Birth_Date, customer.Email, customer.Phone, customer.Purchased_item, customer.inquiry, customer.inquiry_status, id],
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

Customers.remove = (id, result) => {
  sql.query("DELETE FROM customers WHERE Customer_NIC = ?", id, (err, res) => {
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

Customers.removeAll = result => {
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

module.exports = Customers;
