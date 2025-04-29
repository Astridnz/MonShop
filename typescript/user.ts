"use strict"

// Class pour le login 

export default class User{
    
    id: number
    username: string
    email: string
    password: string   
    
    constructor(data: Object){
        this.id = data["id"];
        this.username = data["username"]
        this.password = data["password"]
        this.email = data["email"]
    }
}