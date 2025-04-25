"use strict";
export default class TemplateHome {
    template;
    blogFragment;
    container;
    homepageItems;
    img;
    articleTitle;
    articleImg;
    articlePrice;
    constructor() {
        this.container = document.querySelector(".templateContainer");
        this.template = document.querySelector("template");
        this.blogFragment = this.template?.content;
        this.homepageItems = Array.from(this.blogFragment.querySelectorAll(".homepageItem"));
        this.img = Array.from(this.blogFragment.querySelectorAll("img"));
        this.articleTitle = this.blogFragment.querySelector("h3");
        this.articleImg = this.blogFragment.querySelector("img");
        this.articlePrice = this.blogFragment.querySelector(".prix");
        // this.cloneFetchHome()
    }
    async cloneFetchHome() {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.ok) {
            const articles = await response.json();
            // console.log(articles);
            articles.forEach((article) => {
                this.homepageItems?.forEach((homepageItem) => {
                    homepageItem.id = `${article.id}`;
                });
                if (this.articleTitle) {
                    this.articleTitle.textContent = article.title;
                }
                if (this.articleImg) {
                    this.articleImg.src = article.image;
                }
                if (this.articlePrice) {
                    // console.log(this.articleImg);
                    this.articlePrice.textContent = `${article.price.toString()}€`;
                }
                const clone = this.blogFragment?.cloneNode(true);
                this.container?.append(clone);
            });
            this.homepageItems = Array.from(document.querySelectorAll(".homepageItem"));
            this.homepageItems?.forEach((homepageItem) => {
                console.log(homepageItem);
                homepageItem.addEventListener("click", () => {
                    //    TemplateModale.classList.add("open") 
                });
            });
        }
    }
}
