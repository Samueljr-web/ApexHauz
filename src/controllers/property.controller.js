const Property = require("../models/property.model");
const URL = require('url').URL;

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

exports.findAll = (req, res) => {
    Property.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving properties."
            })
        }
        res.status(200).send({status: "success", 
            data: data})
    })
}

exports.findOne = (req, res) => {
    Property.findById(Number(req.params.id), (err, data) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Property with id ${req.params.id} does not exist.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving property with id " + req.params.id
                });
            }
        } else {
            res.status(200).send({status: "success", 
            data: data})
        }
    })
}

exports.findType = (req, res) => {
    const url = require('url')
    const queryObject = url.parse(req.url, true).query;
    const type = queryObject.type;
    Property.findByType(type, (err, data) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Property with type ${req.query.type} does not exist.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving property of type " + req.query.type
                });
            }
        } else {
            res.status(200).send({status: "success", 
            data: data})
        }
    })
}

exports.deleteProp = (req, res) => {
    Property.delete(Number(req.params.id), (err, data) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Property with id ${req.params.id} does not exist.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete property of id " + req.params.id
                });
            }
        } else {
            res.status(200).send({status: "success", 
            message: "Property was deleted successfully!",})
        };
    })
}

exports.markAsSold = (req, res) => {
    Property.markSold(Number(req.params.id), (err, data) => {
        if (err) {
            if (err.kind === "not found") {
                res.status(404).send({
                    message: `Property with id ${req.params.id} does not exist.`
                });
            } else {
                res.status(500).send({
                    message: `Property with id ${req.params.id} could not be mared as sold.`
                });
            }
        } else {
            res.status(200).send({status: "success", 
            message: "Property was marked succesfully!",
            data:data})
        };
    })
}

exports.update = (req,res) => {
    if(!req.body) {
        res.status(500).send({
            message: "Content cannot be blank!"
        });
    }
    const {id, owner, status, price, state, city, address, type, image_url, created_on} = req.body;
    Property.updateById(Number(req.params.id), 
        new Property(id, owner, status, price, state, city, address, type, image_url, created_on), 
        (err, data) => {
            if (err) {
                if (err.kind === "not found") {
                    res.status(404).send({
                        message: `Property with id ${req.params.id} does not exist.`
                    });
                } else {
                    res.status(500).send({
                        message: "Could not update property of id " + req.params.id
                    });
                }
        
            } else res.send(data);
        }
    )
}   