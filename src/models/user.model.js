const {
  createNewUser,
  findUserByEmail,
  findUserById,
} = require("../database/queries");
const db = require("../config/db.config");

// Sign up a user
class User {
  constructor(
    id,
    email,
    first_name,
    last_name,
    password,
    phone,
    address,
    is_admin
  ) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.is_admin = is_admin;
  }
  static create(newUser, result) {
    db.query(
      createNewUser,
      [
        newUser.id,
        newUser.email,
        newUser.first_name,
        newUser.last_name,
        newUser.password,
        newUser.phone,
        newUser.address,
        newUser.is_admin,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        // console.log("Created User: ", { ...newUser });
        result(null, { id: res.insertId, ...newUser });
      }
    );
  }

  static findByEmail(email, result) {
    db.query(findUserByEmail, email, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        // console.log("found email: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found
      result({ kind: "not_found" }, null);
    });
  }

  static findById(id, result) {
    db.query(findUserById, id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        // console.log("found id: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found
      result({ kind: "not_found" }, null);
    });
  }

  static updatePassword({ id, newEncryptedPassword }, result) {
    db.query(
      `UPDATE users SET password = '${newEncryptedPassword}' WHERE id = '${id}'`,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        // console.log(res);
        result(null, res);
        return;
      }
    );
  }
}
module.exports = User;
