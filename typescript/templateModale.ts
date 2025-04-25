"use strict"


// type Article = {id:number, title: string, price: number, description: string, category: string, image: string}

export default class TemplateModale{

    modaleDialog : HTMLDialogElement
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
        this.modaleDialog = document.createElement("dialog")
        this.modaleDialog.classList.add("modaleDialog")
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
        this.modaleDialog.append(this.modaleContainer)
        this.main?.append(this.modaleDialog)
    }
}