const User = require("../models/user.model")

const checkEmail = (req, res, next) => {
    const {email} = req.body
    User.findByEmail(email, (_ , data) => {
        if(data) {
            res.status(400).send({
                status: 'error',
                message: `A user with this email ${email} already exits`
            })
           return;
        }
        next()
    })
}
const asyncHandler = (cb) => async(req, res, next) => {
  try {
      await cb(req, res, next)
  } catch (err) {
      return res.status(400).json({
          status: "error",
          message: err.message
      })
  }
  return true;
}

module.exports = {
    checkEmail,
    asyncHandler
}
