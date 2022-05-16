const router = require("express").Router();
const propertyController = require("../controllers/property.controller")

router.route('/properties')
    .get(propertyController.findAll);

router.route('/properties')
    .post(propertyController.create);

router.route('/properties/:id')
    .get(propertyController.findOne);

module.exports = router;