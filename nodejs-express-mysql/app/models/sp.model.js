const sql = require("./db.js");

const Supplier = function(supplier) {
  this.supplier_id = supplier.supplier_id;
  this.name = supplier.name;
  this.contact = supplier.contact;

};


Supplier.getAll = result => {
  sql.query("SELECT * FROM supplier", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};


Supplier.create = (newSupplier, result) => {
  //console.log(newCustomer)
  sql.query("INSERT INTO supplier SET ?", newSupplier, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Item: ", { id: res.insertId, ...newSupplier });
    result(null, { id: res.insertId, ...newSupplier });
  });
};
module.exports = Supplier;
