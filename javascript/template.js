"use strict";
export default class TemplateHome {
    template;
    blogFragment;
    container;
    homepageItems;
    templateTitle;
    templateImg;
    templatePrice;
    constructor() {
        this.container = document.querySelector(".templateContainer");
        this.template = document.querySelector("template");
        this.blogFragment = this.template?.content;
        this.homepageItems = Array.from(this.blogFragment.querySelectorAll(".homepageItem"));
        this.templateTitle = this.blogFragment.querySelector("h1");
        this.templateImg = this.blogFragment.querySelector("img");
        this.templatePrice = this.blogFragment.querySelector(".prix");
        this.cloneFetch;
    }
    async cloneFetch() {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
            const articles = await response.json();
            console.log(articles);
            articles.forEach((article) => {
                // console.log(article);
                this.homepageItems?.forEach((homepageItem) => {
                    homepageItem.id = `${article.id}`;
                });
                if (this.templateTitle) {
                    this.templateTitle.textContent = article.title;
                }
                if (this.templateImg) {
                    this.templateImg.src = article.image;
                }
                if (this.templatePrice) {
                    console.log(this.templateImg);
                    this.templatePrice.textContent = article.price.toString();
                }
                const clone = this.blogFragment?.cloneNode(true);
                this.container?.append(clone);
            });
        }
    }
}
