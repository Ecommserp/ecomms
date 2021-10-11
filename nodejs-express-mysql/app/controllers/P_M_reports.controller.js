const P_M = require("../models/P_M_reports.model.js");



  exports.findAll_inq7 = (req, res) => {
    P_M.getAll_inq7((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };



  exports.findAll_inq30 = (req, res) => {
    P_M.getAll_inq30((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.findAll_inq365 = (req, res) => {
    P_M.getAll_inq365((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
