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
    // const blabla = new Produit
    async fetchArticle() {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
            const articles = await response.json();
            // this.id = articles[].id
            // this.title = articles[].title
            // this.price = articles[].price
            // this.description = articles[].description
            // this.category = articles[].category
            // this.image = articles[].image
        }
    }
}
