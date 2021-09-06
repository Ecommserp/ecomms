const sql = require("./db.js");

const Purchases = function(purchases) {
  this.Purchase_id = purchases.Purchase_id;
  this.Supplier_id = purchases.Supplier_id;
  this.Date = purchases.Date;
  this.quantity = purchases.quantity;
  this.P_price = purchases.P_price;
  this.S_price = purchases.S_price;
};


Purchases.getAll = result => {
  sql.query("SELECT * FROM purchases", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};
module.exports = Purchases;
