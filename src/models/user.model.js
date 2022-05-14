const db = require('../config/db.config');

class User {
    constructor(id, email, first_name, last_name, password, phone, address, is_admin) {
       this.id = id;
       this.email = email;
       this.first_name = first_name;
       this.last_name = last_name;
       this.password = password;
       this.phone = phone;
       this.address = address;
    }
}