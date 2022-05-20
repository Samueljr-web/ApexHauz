const Property = require("../models/property.model");

const create = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      status: "error",
      message: "Content cannot be blank!",
    });
  }

  const {
    id,
    owner,
    status,
    price,
    state,
    city,
    address,
    type,
    image_url,
    created_on,
  } = req.body;
  const property = new Property(
    id,
    owner,
    status,
    price,
    state,
    city,
    address,
    type,
    image_url,
    created_on
  );

  Property.create(property, (err, data) => {
    if (err) {
      res.status(500).json({
        status: "success",
        message:
          err.message || "Some error occurred while creating the property.",
      });
      return;
    }
    res.status(201).json({ status: "success", data });
  });
};

const findAll = (req, res) => {
  Property.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message:
          err.message || "Some error occurred while retrieving properties.",
      });
    }
    res.status(200).json({ status: "success", data });
  });
};

const findOne = ({ params: { id } }, res) => {
  Property.findById(+id, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).json({
          status: "error",
          message: `Property with id ${id} does not exist.`,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Error retrieving property with id " + id,
        });
      }
    } else {
      res.status(200).json({ status: "success", data });
    }
  });
};

const findType = ({ query: { type } }, res) => {
  if (!type) {
    res.status(500).json({
      status: "error",
      message: "Pls specify the type.",
    });
    return;
  }
  Property.findByType(type, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).json({
          status: "error",
          message: `Property with type ${type} does not exist.`,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Error retrieving property of type " + type,
        });
      }
    } else {
      res.status(200).json({ status: "success", data });
    }
  });
};

const deleteProp = ({ params: { id } }, res) => {
  Property.delete(+id, (err, data) => {
    if (err) {
      if (err.kind === "not found") {
        res.status(404).json({
          status: "error",
          message: `Property with id ${id} does not exist.`,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Could not delete property of id " + id,
        });
      }
    } else {
      res.status(200).json({
        status: "success",
        message: "Property was deleted successfully!",
      });
    }
  });
};

const markAsSold = ({ params: { id } }, res) => {
  Property.markSold(+id, (err, data) => {
    if (err) {
      if (err.kind === "not found")
        res.status(404).json({
          status: "error",
          message: `Property with id ${id} does not exist.`,
        });
      else
        res.status(500).json({
          status: "error",
          message: `Property with id ${id} could not be mared as sold.`,
        });
    } else
      res.status(200).json({
        status: "success",
        message: "Property was marked succesfully as sold!",
      });
  });
};

const update = (req, res) => {
  if (!req.body || !req.params) {
    res.status(500).json({
      message: "Content cannot be blank!",
    });
  }
  const {
    owner,
    status,
    price,
    state,
    city,
    address,
    type,
    image_url,
  } = req.body;
  const { id } = req.params;
  Property.updateById(
    id,
    new Property(
      id,
      owner,
      status,
      price,
      state,
      city,
      address,
      type,
      image_url
    ),
    (err, data) => {
      if (err) {
        if (err.kind === "not found")
          res.status(404).json({
            status: "error",
            message: `Property with id ${req.params.id} does not exist.`,
          });
        else
          res.status(500).json({
            status: "error",
            message: "Could not update property of id " + req.params.id,
          });
      } else
        res.status(200).json({
          status: "success",
          data,
        });
    }
  );
};

module.exports = {
  create,
  findAll,
  findOne,
  findType,
  deleteProp,
  markAsSold,
  update,
};
