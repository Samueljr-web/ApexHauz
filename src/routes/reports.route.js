const router = require("express").Router();
const reportsController = require("../controllers/reports.controller")

router.route('/reports')
    .get(reportsController.findAll);

router.route('/reports')
    .post(reportsController.create);

module.exports = router;