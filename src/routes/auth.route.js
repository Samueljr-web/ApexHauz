const router = require("express").Router();
const { asyncHandler, checkEmail } = require("../middleware/auth");
const authController = require("../controllers/auth.controller");


router.route('/signup')
    .post(asyncHandler(checkEmail), asyncHandler(authController.signup));

router.route('/signin')
    .post(asyncHandler(authController.signin));

module.exports = router;