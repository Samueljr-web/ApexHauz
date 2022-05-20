const db = require("../config/db.config");

class Property {
  constructor(id, owner, status, price, state, city, address, type, image_url) {
    this.id = id;
    this.owner = owner;
    this.type = type;
    this.status = status;
    this.price = price;
    this.state = state;
    this.city = city;
    this.address = address;
    this.image_url = image_url;
  }
  static create(newProperty, result) {
    db.query(
      `INSERT INTO properties (owner, status, price, state, city, address, type, image_url) VALUES(?,?,?,?,?,?,?,?)`,
      [
        newProperty.owner,
        newProperty.status,
        newProperty.price,
        newProperty.state,
        newProperty.city,
        newProperty.address,
        newProperty.type,
        newProperty.image_url,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        result(null, { ...newProperty, id: res.insertId });
      }
    );
  }

  static getAll(result) {
    db.query(`SELECT * FROM properties`, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      result(null, res);
    });
  }

  static findById(id, result) {
    db.query(`SELECT * FROM properties WHERE id = ?`, [id], (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.length) {
        result(null, res[0]);
        return;
      }

      result({ kind: "not found" }, null);
    });
  }

  static findByType(type, result) {
    db.query(`SELECT * FROM properties WHERE type = ?`, [type], (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.length) {
        result(null, res);
        return;
      }

      result({ kind: "not found" }, null);
    });
  }

  static delete(id, result) {
    db.query(`DELETE FROM properties WHERE id = ?`, [id], (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not found" }, null);
        return;
      }
      result(null, res);
    });
  }

  static updateById(id, newProperty, result) {
    db.query(
      `UPDATE properties SET owner = ?,status = ?,price = ?,state = ?,city = ?,address = ?,type = ?,image_url = ? WHERE id = ?`,
      [
        newProperty.owner,
        newProperty.status,
        newProperty.price,
        newProperty.state,
        newProperty.city,
        newProperty.address,
        newProperty.type,
        newProperty.image_url,
        newProperty.id,
      ],
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          result({ kind: "not found" }, null);
          return;
        }
        result(null, { ...newProperty });
      }
    );
  }

  static markSold(id, result) {
    db.query(
      `UPDATE properties SET status = 'sold' WHERE id = ?`,
      [id],
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          result({ kind: "not found" }, null);
          return;
        }
        result(null, res);
      }
    );
  }
}

module.exports = Property;
