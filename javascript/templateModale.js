"use strict";
// type Article = {id:number, title: string, price: number, description: string, category: string, image: string}
export default class TemplateModale {
    modaleDialog;
    modaleContainer;
    modaleLabel;
    main;
    articleTitle;
    articleImg;
    articlePrice;
    articleDesc;
    articleQuantity;
    articleBtn;
    constructor() {
        this.main = document.querySelector("main");
        this.modaleDialog = document.createElement("dialog");
        this.modaleDialog.classList.add("modaleDialog");
        this.modaleContainer = document.createElement("div");
        this.modaleContainer.classList.add("modaleContainer");
        this.articleQuantity = document.createElement("input");
        this.articleQuantity.setAttribute("id", "quantity");
        this.articleQuantity.setAttribute("type", "number");
        this.modaleLabel = document.createElement("label");
        this.modaleLabel.setAttribute("for", "quantity");
        this.modaleContainer.innerHTML = `
        <img class="modaleImg" src="" alt="">
        <p class="modaleDesc"></p>
        <h2 class="modaleTitle"></h2>
        <p class="modaleId"></p>
        <p class="modalePrice"></p>
        <button class="btnAddToCart"></button>
        `;
        this.modaleContainer.append(this.modaleLabel, this.articleQuantity);
        // this.articleDesc = this.modaleContainer.querySelector(".modaleDesc")
        // this.articleBtn = this.modaleContainer.querySelector(".btnAddToCart")
        // this.articleTitle = this.modaleContainer.querySelector(".modaleTitle")
        // this.articleImg = this.modaleContainer.querySelector(".modaleImg")
        // this.articlePrice = this.modaleContainer.querySelector(".modalePrice")
        this.modaleDialog.append(this.modaleContainer);
        this.main?.append(this.modaleDialog);
    }
}
