const db = require("../config/db.config");

// Sign up a user
class User {
  constructor(id, email, first_name, last_name, password, phone, address) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.password = password;
    this.phone = phone;
    this.address = address;
  }

  static create(newUser, result) {
    db.query(
      `INSERT INTO users (email, first_name, last_name, password, phone, address) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        newUser.email,
        newUser.first_name,
        newUser.last_name,
        newUser.password,
        newUser.phone,
        newUser.address,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        result(null, { ...newUser, id: res.insertId });
      }
    );
  }

  static findByEmail(email, result) {
    db.query("SELECT * FROM users WHERE email = ?", email, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    });
  }

  static findById(id, result) {
    db.query("SELECT * FROM users WHERE id = ?", id, (err, res) => {
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

  static updatePassword({ email, newEncryptedPassword }, result) {
    db.query(
      `UPDATE users SET password = '${newEncryptedPassword}' WHERE email = '${email}'`,
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
