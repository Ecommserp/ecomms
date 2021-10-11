const sql = require("./db.js");

// constructor
const Request = function(request) {
  this.Product_name = request.Product_name;
  this.Product_type = request.Product_type;
  this.quantity = request.quantity;
};

Request.create = (newRequest, result) => {
  //console.log(newCustomer)
  sql.query("INSERT INTO requests SET ?", newRequest, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Item: ", { id: res.insertId, ...newRequest });
    result(null, { id: res.insertId, ...newRequest });
  });
};