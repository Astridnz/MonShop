"use strict"
import Burger from "./burger.js"
import Product from "./Product.js"
import TemplateModale from "./templateModale.js"




//TODO Ajout le burger menu en dimension phone/tablette
    if (window.matchMedia('screen and (max-width:575px)').matches){
    const burger = new Burger()
    burger.toggle(burger.nav)
    burger.logoClick()
    }




//TODO Ajout du template article Home
//* création du type article
type Article = { id: number, title: string, price: number, description: string, category: string, image: string }

//* déclaration des variables pour le template d'un article sur la home page
const container: HTMLDivElement | null = document.querySelector(".templateContainer")
const template: HTMLTemplateElement | null = document.querySelector("template")
const blogFragment: DocumentFragment | undefined = template?.content
const articleTitle: HTMLHeadingElement | null = blogFragment!.querySelector("h3")
const articleImg: HTMLImageElement | null = blogFragment!.querySelector("img")
const articlePrice: HTMLParagraphElement | null = blogFragment!.querySelector(".prix")

const products: Product[] = [];

//*fonction pour rechercher les données de l'API, associer respectivement leurs valeurs aux valeurs des éléments du template et enfin cloner ce template autant de fois qu'il y a de donnée dans l'API 
cloneFetchHome()
async function cloneFetchHome() {
    const response = await fetch("https://fakestoreapi.com/products")
    if (response.ok) {
        let homepageItems: HTMLElement[] | null = Array.from(blogFragment!.querySelectorAll(".homepageItem"))
        const articles: Object[] = await response.json();

        articles.forEach((article) => {
            products.push(new Product(article as Article));
        });

        articles.forEach((article: Article) => {
            homepageItems?.forEach((homepageItem) => {
                homepageItem.id = `${article.id}`
            })
            if (articleTitle) {
                articleTitle.textContent = article.title
            }
            if (articleImg) {
                articleImg.src = article.image
            }
            if (articlePrice) {
                articlePrice.textContent = `${article.price.toString()}€`
            }
            const clone = blogFragment?.cloneNode(true) as DocumentFragment
            container?.append(clone)
        })
        homepageItems = Array.from(document.querySelectorAll(".homepageItem"))
        homepageItems?.forEach((homepageItem) => {
            console.log(homepageItem);
            homepageItem.addEventListener("click", () => {
                //    TemplateModale.classList.add("open") 
            })
        })
    }
}




//TODO Ajout du template aritcle Modale
    const template2 = new TemplateModale()

