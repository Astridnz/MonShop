"use strict";
// Class pour le login 
export default class User {
    id;
    username;
    email;
    password;
    constructor(data) {
        this.id = data["id"];
        this.username = data["username"];
        this.password = data["password"];
        this.email = data["email"];
    }
}
