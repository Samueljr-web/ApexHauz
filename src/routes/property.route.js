const router = require("express").Router();
const propertyController = require("../controllers/property.controller")

router.route('/properties')
    .get(propertyController.findAll);

router.route('/properties')
    .post(propertyController.create);

router.route('/properties/:id')
    .get(propertyController.findOne);

router.route('/properties/:id')
    .delete(propertyController.deleteProp);

router.route('/properties/search?type=:type')
    .get(propertyController.findType);


module.exports = router;