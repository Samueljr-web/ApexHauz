
const createNewUser = `
     INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?, ?)
`
const findUserByEmail = `
     SELECT * FROM users WHERE email = ?
`

module.exports = {
    createNewUser,
    findUserByEmail
}