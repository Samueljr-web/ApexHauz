const db = require("../config/db.config");

class Reports {
  constructor(property_id, reason, description) {
    this.property_id = property_id;
    this.reason = reason;
    this.description = description;
  }

  static create(newReport, result) {
    console.log(newReport);
    db.query(
      `INSERT INTO reports (property_id, reason, description) VALUES(?,?,?)`,
      [newReport.property_id, newReport.reason, newReport.description],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, { id: res.insertId, ...newReport });
      }
    );
  }

  static getAll(result) {
    db.query(`SELECT * FROM reports`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  }
}

module.exports = Reports;
