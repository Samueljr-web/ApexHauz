const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET_KEY } = process.env;

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const compare = (password, hashedPassword) =>
  bcrypt.compareSync(password, hashedPassword);

const generate = (id, expireDate) =>
  jwt.sign(
    { id },
    JWT_SECRET_KEY,
    expireDate ? expireDate : { expiresIn: "1d" }
  );

const decode = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  hash,
  compare,
  generate,
  decode,
};
