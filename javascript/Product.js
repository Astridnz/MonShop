"use strict";
export default class Product {
    id;
    title;
    price;
    description;
    category;
    image;
    constructor() {
        this.id = 2;
        this.title = "";
        this.price = 1;
        this.description = "";
        this.category = "";
        this.image = "";
    }
    // const blabla = new Produit
    async fetchArticle() {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
            const articles = await response.json();
            articles.forEach((article) => {
                console.log(article.description);
                this.id = article.id;
            });
        }
    }
}
