const Property = require("../models/property.model");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be blank!"
        })
    }

    const {id, owner, status, price, state, city, address, type, image_url, created_on} = req.body
    const property = new Property(id, owner, status, price, state, city, address, type, image_url, created_on)

    Property.create(property, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the property."
            } )
        }
        res.status(201).send({status: "success", 
            data: data})
    })
}

/*exports.findAll = (req, res) => {
    Property.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving properties."
            })
        }
        res.status(200).send({status: "success", 
            data: data})
    })
}*/