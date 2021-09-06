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
module.exports = Supplier;
