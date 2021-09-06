const P_M = require("../models/sp.model.js");


exports.findAll = (req, res) => {
  P_M.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};
