const router = require("express").Router();
const propertyController = require("../controllers/property.controller")

router.route('/properties')
    .get(propertyController.findAll);

router.route('/properties')
    .post(propertyController.create);

router.route('/properties/find/:type')
    .get(propertyController.findType);

router.route('/properties/:id')
    .patch(propertyController.update);

router.route('/properties/:id/sold')
    .patch(propertyController.markAsSold);

router.route('/properties/:id')
    .get(propertyController.findOne);

router.route('/properties/:id')
    .delete(propertyController.deleteProp);

module.exports = router;