"use strict";
export default class Product {
    id;
    title;
    price;
    description;
    category;
    image;
    constructor(data) {
        this.id = data["id"];
        this.title = data["title"];
        this.price = data["price"];
        this.description = data["description"];
        this.category = data["category"];
        this.image = data["image"];
    }
}
