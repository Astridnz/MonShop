"use strict";
// Class pour le login 
export default class User {
    id;
    name;
    username;
    email;
    password;
    address;
    phone;
    constructor(data) {
        this.name = data["name"];
        this.address = data["address"];
        this.id = data["id"];
        this.username = data["username"];
        this.password = data["password"];
        this.email = data["email"];
        this.phone = data["phone"];
    }
}
