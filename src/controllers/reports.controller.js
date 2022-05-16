const Report = require("../models/reports.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be blank!"
        })
    }

    const {id, property_id, created_on, reason, description} = req.body
    const report = new Report(id, property_id, created_on, reason, description)

    Report.create(report, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the report."
            } )
        }
        res.status(201).send({status: "success", 
            data: data})
    })
}

exports.findAll = (req, res) => {
    Report.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving reports."
            })
        }
        res.status(200).send({status: "success", 
            data: data})
    })
}