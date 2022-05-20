const router = require("express").Router();
const propertyController = require("../controllers/property.controller");

router
  .route("/properties")
  .get(propertyController.findAll)
  .post(propertyController.create);

router.route("/properties/search").get(propertyController.findType);

router
  .route("/properties/:id")
  .get(propertyController.findOne)
  .patch(propertyController.update)
  .delete(propertyController.deleteProp);

router.route("/properties/:id/sold").patch(propertyController.markAsSold);

module.exports = router;
