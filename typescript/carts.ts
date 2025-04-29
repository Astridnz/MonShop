"use strict"
import User from "../javascript/user.js";
import Product from "../javascript/Product.js";

export default class Cart{
    
    id: number
    userId: User.id
    products: Product[]
    date: string
    
    constructor(data: Object){
        this.id = data["id"];
        this.userId = data["userId"]
        this.products = data["products"]
        this.date = data["date"]
    }
}