const router = require("express").Router();
const propertyController = require("../controllers/property.controller")

module.exports = app => {
    router.get("/", propertyController.findAll)

    router.post("/", propertyController.create)

    app.use('/api/properties', router);
}