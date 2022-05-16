const db = require('../config/db.config');

class Reports {
    constructor(id, property_id, created_on, reason, description) {
       this.id = id;
       this.property_id = property_id;
       this.created_on = created_on;
       this.reason = reason;
       this.description = description;
    }
    static create(newReport, result) {
        db.query(`INSERT INTO reports VALUES(?,?,?,?,?)`, [
            newReport.id, 
            newReport.property_id, 
            newReport.created_on, 
            newReport.reason, 
            newReport.description, 
            
        ], (err, res) => {
            if (err) {
                console.log("error: ",err);
                result(err,null);
                return;
            } 
            console.log("Created Report: ", {...newReport});
            result(null, {id: res.insertId, ...newReport});   
        })
        
    }

    static getAll(result) {
        db.query(`SELECT * FROM reports`, (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }
            console.log("Reports: ", res);
            result(null, res);
        })
    }
}

module.exports = Reports;