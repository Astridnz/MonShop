"use strict"

import TemplateHome from "./templateHome.js"

type Article = {id:number, title: string, price: number, description: string, category: string, image: string}

export default class TemplateModale{

    modaleContainer:HTMLDivElement
    modaleLabel: HTMLLabelElement
    main:HTMLElement|null
    articleTitle: HTMLHeadingElement | null
    articleImg: HTMLImageElement | null
    articlePrice: HTMLParagraphElement | null
    articleDesc: HTMLParagraphElement | null
    articleQuantity: HTMLInputElement | null
    articleBtn: HTMLButtonElement | null
    


    constructor(){
        this.main = document.querySelector("main")
        this.modaleContainer = document.createElement("div")
        this.modaleContainer.classList.add("modaleContainer")
        this.articleQuantity = document.createElement("input")
        this.articleQuantity.setAttribute("id", "quantity")
        this.articleQuantity.setAttribute("type", "number")
        this.modaleLabel = document.createElement("label")
        this.modaleLabel.setAttribute("for", "quantity")
        this.modaleContainer.innerHTML=`
        <img class="modaleImg" src="" alt="">
        <p class="modaleDesc"></p>
        <h2 class="modaleTitle"></h2>
        <p class="modaleId"></p>
        <p class="modalePrice"></p>
        <button class="btnAddToCart"></button>
        `
        this.modaleContainer.append(this.modaleLabel,this.articleQuantity )
        this.articleDesc = document.querySelector(".modaleDesc")
        this.articleBtn = document.querySelector(".btnAddToCart")
        this.articleTitle = document.querySelector(".modaleTitle")
        this.articleImg = document.querySelector(".modaleImg")
        this.articlePrice = document.querySelector(".modalePrice")
    this.main?.append(this.modaleContainer)
    }


    async cloneFetchModale() {
        // await TemplateHome
        const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok) {
            const articles = await response.json()
            articles.forEach((article: Article) => {
                
            })
        }
    }


}