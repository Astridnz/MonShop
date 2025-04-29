"use strict"

// Class pour le login 

export default class User{
    
    id: number
    name: object
    username: string
    email: string
    password: string
    address: object
    phone: string   
    
    constructor(data: Object){
        this.name = data["name"]
        this.address = data["address"]
        this.id = data["id"];
        this.username = data["username"]
        this.password = data["password"]
        this.email = data["email"]
        this.phone = data["phone"]
    }
}