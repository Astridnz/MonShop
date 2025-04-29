"use strict"
import Burger from "./burger.js"
import Product from "./Product.js"
import User from "./user.js"


//TODO Ajout le burger menu en dimension phone/tablette
    if (window.matchMedia('screen and (max-width:575px)').matches){
    const burger = new Burger()
    burger.toggle(burger.nav)
    burger.logoClick()
    }



//TODO Ajout du template article Home
//* déclaration des variables pour le template d'un article sur la home page
const container: HTMLDivElement | null = document.querySelector(".templateContainer")
const template: HTMLTemplateElement | null = document.querySelector("template")
const blogFragment: DocumentFragment | undefined = template?.content
const articleTitle: HTMLHeadingElement | null = blogFragment!.querySelector("h3")
const articleImg: HTMLImageElement | null = blogFragment!.querySelector("img")
const products: Product[] = [];
const articlePrice: HTMLParagraphElement | null = blogFragment!.querySelector(".prix")
let homepageItems: HTMLElement[] | null = Array.from(blogFragment!.querySelectorAll(".homepageItem"))

//*fonction pour rechercher les données de l'API, associer respectivement leurs valeurs aux valeurs des éléments du template et enfin cloner ce template autant de fois qu'il y a de donnée dans l'API 
cloneFetchHome()
async function cloneFetchHome() {
    const response: Response = await fetch("https://fakestoreapi.com/products")
    if (response.ok) {
        const articles: Object[] = await response.json();
        articles.forEach((article: Product) => {
            products.push(new Product(article as Product));
        })

        products.forEach((product)=>{
            homepageItems?.forEach((homepageItem) => {
                homepageItem.id = `${product.id}`
            })
            if (articleTitle) {
                articleTitle.textContent = product.title
            }
            if (articleImg) {
                articleImg.src = product.image
            }
            if (articlePrice) {
                articlePrice.textContent = `${product.price.toString()}€`
            }
            const clone = blogFragment?.cloneNode(true) as DocumentFragment
            container?.append(clone)
        })
        homepageItems = Array.from(document.querySelectorAll(".homepageItem"))
        
        popUpModale()
    }
}


//TODO Ajout de la Modale
//création de la modale en HTML, avec ses différents éléments, leurs classes et leurs attributs respectifs
const main:HTMLElement|null = document.querySelector("main")    
const modaleDialog : HTMLDialogElement = document.createElement("dialog")
const modaleContainer:HTMLDivElement = document.createElement("div")
const modaleLabel: HTMLLabelElement = document.createElement("label")
const modaleQuantity: HTMLInputElement | null = document.createElement("input")
modaleContainer.innerHTML=`
<img class="modaleImg" src="" alt="">
<p class="modaleDesc"></p>
<h2 class="modaleTitle"></h2>
<p class="modaleId"></p>
<p class="modalePrice"></p>
<button class="btnAddToCart"></button>
`
modaleDialog.classList.add("modaleDialog")
modaleContainer.classList.add("modaleContainer")
const modaleTitle: HTMLHeadingElement | null = modaleContainer.querySelector(".modaleTitle")
const modaleImg: HTMLImageElement | null = modaleContainer.querySelector(".modaleImg")
console.log(modaleImg);
const modalePrice: HTMLParagraphElement | null = modaleContainer.querySelector(".modalePrice")
const modaleDesc: HTMLParagraphElement | null = modaleContainer.querySelector(".modaleDesc")
const modaleId: HTMLParagraphElement | null = modaleContainer.querySelector(".modaleId")
const modaleBtn: HTMLButtonElement | null = modaleContainer.querySelector(".btnAddToCart")
modaleQuantity.setAttribute("id", "quantity")
modaleQuantity.setAttribute("type", "number")
modaleLabel.setAttribute("for", "quantity")
modaleContainer.append(modaleLabel,modaleQuantity )
modaleDialog.append(modaleContainer)
main?.append(modaleDialog)


function popUpModale()
{
    homepageItems.forEach((homepageItem) => {
        homepageItem.addEventListener("click", () => {
            products.forEach((product)=>{
                if (homepageItem.id === product.id.toString()){
                modaleTitle.textContent = product.title
                modalePrice.textContent = `${product.price.toString()} €`
                modaleId.textContent = `sku : 0000${product.id.toString()}`
                modaleDesc.innerHTML = `Détails du produit :<br><br>${product.description}`
                modaleBtn.textContent = "Ajouter au panier"
                modaleImg.src = product.image
                modaleLabel.textContent = "Quantité :"
                }
            })
            modaleDialog.showModal();
        });
        document.addEventListener("click", (event:MouseEvent) => {
            const target = event.target as HTMLElement
            if(target === modaleDialog){
                modaleDialog.close()
            }
        });
    });
}

// Création d'une fonction pour le panier utilisateur
async function fetchUser (){
    
    const response: Response = await fetch ('https://fakestoreapi.com/users/1')
    if(response.ok){
        const users: Object [] = await response.json()
        users.forEach((user) => {
        
    
    })
    } 
}

modaleBtn.addEventListener("click", ()=>{
    const panier = []
    panier.push
    if (modaleQuantity.checked) {
            sessionStorage.setItem("NumberOfItem", "input") 
            // modaleQuantity.value =
        }
    
})