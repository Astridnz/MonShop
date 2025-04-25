"use strict"

export default class Product{
    public id: number;
    public title: string
    public price: number
    public description: string 
    public category: string 
    public image: string 
    
    
    constructor(data: Object)
    {
        this.id = data["id"];
        this.title = data["title"]
        this.price = data["price"]
        this.description = data["description"]
        this.category = data["category"]
        this.image = data["image"]
    }
}

