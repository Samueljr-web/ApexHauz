const Report = require("../models/reports.model");

const create = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be blank!",
    });
    return;
  }

  const { property_id, created_on, reason, description } = req.body;
  const report = new Report(property_id, created_on, reason, description);

  Report.create(report, (err, data) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message:
          err.message || "Some error occurred while creating the report.",
      });
    }
    res.status(201).json({ status: "success", data });
  });
};

const findAll = (_, res) => {
  Report.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message: err.message || "Some error occurred while retrieving reports.",
      });
    }
    res.status(200).json({ status: "success", data });
  });
};

module.exports = {
  create,
  findAll,
};
