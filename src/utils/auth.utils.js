const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const compare = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);


const generate = (id) => jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1d'});
const decode = (token) => {
    try {
        return jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)
    } catch (error) {
        console.error(error);
    }
};
module.exports = {
    hash,
    compare,
    generate,
    decode
}