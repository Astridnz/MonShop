"use strict";
import Burger from "./burger.js";
import Product from "./Product.js";
import User from "./user.js";
import Cart from "./carts.js";
//TODO Ajout le burger menu en dimension phone/tablette
if (window.matchMedia('screen and (max-width:575px)').matches) {
    const burger = new Burger();
    burger.toggle(burger.nav);
    burger.logoClick();
}
//TODO Ajout du template article Home
//* déclaration des variables pour le template d'un article sur la home page
const container = document.querySelector(".templateContainer");
const template = document.querySelector("template");
const blogFragment = template?.content;
const articleTitle = blogFragment.querySelector("h3");
const articleImg = blogFragment.querySelector("img");
const products = [];
const articlePrice = blogFragment.querySelector(".prix");
let homepageItems = Array.from(blogFragment.querySelectorAll(".homepageItem"));
//*fonction pour rechercher les données de l'API, associer respectivement leurs valeurs aux valeurs des éléments du template et enfin cloner ce template autant de fois qu'il y a de donnée dans l'API 
cloneFetchHome();
async function cloneFetchHome() {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
        const articles = await response.json();
        articles.forEach((article) => {
            products.push(new Product(article));
        });
        products.forEach((product) => {
            homepageItems?.forEach((homepageItem) => {
                homepageItem.id = `${product.id}`;
            });
            if (articleTitle) {
                articleTitle.textContent = product.title;
            }
            if (articleImg) {
                articleImg.src = product.image;
            }
            if (articlePrice) {
                articlePrice.textContent = `${product.price.toString()}€`;
            }
            const clone = blogFragment?.cloneNode(true);
            container?.append(clone);
        });
        homepageItems = Array.from(document.querySelectorAll(".homepageItem"));
        popUpModale();
        AddProductToCart();
    }
}
//TODO Ajout de la Modale Ajouter au panier
//création de la modale en HTML, avec ses différents éléments, leurs classes et leurs attributs respectifs
const main = document.querySelector("main");
const modaleDialog = document.createElement("dialog");
const modaleContainer = document.createElement("div");
const modaleLabel = document.createElement("label");
const modaleQuantity = document.createElement("input");
modaleContainer.innerHTML = `
<img class="modaleImg" src="" alt="">
<p class="modaleDesc"></p>
<h2 class="modaleTitle"></h2>
<p class="modaleSkuId">sku : 00000</p>
<p class="modalePrice"></p>
<button class="btnAddToCart"></button>
<div class = "btnModaleContainer">
    <button class="btnKeepShopping">Continuer vos achats</button>
    <button class="btnGoToCart">Voir le panier</button>
</div>
`;
modaleDialog.classList.add("modaleDialog");
modaleContainer.classList.add("modaleContainer");
const modaleTitle = modaleContainer.querySelector(".modaleTitle");
const modaleImg = modaleContainer.querySelector(".modaleImg");
const modalePrice = modaleContainer.querySelector(".modalePrice");
const modaleDesc = modaleContainer.querySelector(".modaleDesc");
const modaleSkuId = modaleContainer.querySelector(".modaleSkuId");
const btnAddToCart = modaleContainer.querySelector(".btnAddToCart");
const btnModaleContainer = modaleContainer.querySelector(".btnModaleContainer");
const btnKeepShopping = modaleContainer.querySelector(".btnKeepShopping");
const btnGoToCart = modaleContainer.querySelector(".btnGoToCart");
btnModaleContainer.style.width = "0";
modaleQuantity.setAttribute("id", "quantity");
modaleQuantity.setAttribute("min", "0");
modaleQuantity.setAttribute("max", "99");
modaleQuantity.setAttribute("type", "number");
modaleQuantity.value = "1";
modaleLabel.setAttribute("for", "quantity");
modaleContainer.append(modaleLabel, modaleQuantity);
modaleDialog.append(modaleContainer);
main?.append(modaleDialog);
function popUpModale() {
    homepageItems.forEach((homepageItem) => {
        homepageItem.addEventListener("click", () => {
            products.forEach((product) => {
                if (homepageItem.id === product.id.toString()) {
                    modaleTitle.textContent = product.title;
                    modalePrice.textContent = `${product.price.toString()} €`;
                    modaleSkuId.textContent = `sku : 0000${product.id.toString()}`;
                    modaleDesc.innerHTML = `Détails du produit :<br><br>${product.description}`;
                    btnAddToCart.textContent = "Ajouter au panier";
                    modaleImg.src = product.image;
                    modaleLabel.textContent = "Quantité :";
                }
            });
            modaleDialog.showModal();
        });
        document.addEventListener("click", (event) => {
            const target = event.target;
            if (target === modaleDialog) {
                resetModale();
                modaleDialog.close();
            }
        });
    });
    console.log(modaleSkuId);
}
const users = [];
const carts = [];
fetchUser();
fetchCart();
//TODO Création d'une fonction pour les data utilisateur 
async function fetchUser() {
    const response = await fetch('https://fakestoreapi.com/users');
    if (response.ok) {
        const usersData = await response.json();
        usersData.forEach((userData) => {
            users.push(new User(userData));
        });
    }
}
//TODO Création d'une fonction pour les data panier 
async function fetchCart() {
    const response = await fetch('https://fakestoreapi.com/carts');
    if (response.ok) {
        const cartsData = await response.json();
        cartsData.forEach((cartData) => {
            carts.push(new Cart(cartData));
        });
    }
}
//TODO Création d'une fonction rendre fonctionnel le bouton ajouter au panier et le nombre d'articles choisi
const panier = { id: 0, userId: 0, products: [], date: "" };
function AddProductToCart() {
    btnAddToCart.addEventListener("click", function () {
        products.forEach((product) => {
            if (parseInt(modaleSkuId.textContent.slice(-2)) === product.id) {
                for (let i = 0; i < parseInt(modaleQuantity.value); i++) {
                    panier.products.push(product);
                    btnModaleContainer.style.width = "100%";
                    btnAddToCart.style.width = "0";
                    if (parseInt(modaleQuantity.value) > 0) {
                        sessionStorage.setItem("product", "");
                    }
                }
                console.log(panier);
            }
        });
    });
}
//TODO remettre le bouton "ajouter au panier" de la modale visible et les deux autres invisibles, plus réaction au clic de ces deux aurtes bouton
function resetModale() {
    btnModaleContainer.style.width = "0";
    btnAddToCart.style.width = "100%";
}
btnKeepShopping.addEventListener("click", resetModale);
btnKeepShopping.addEventListener("click", () => {
    modaleDialog.close();
});
btnGoToCart.addEventListener("click", resetModale);
btnGoToCart.addEventListener("click", () => {
    window.location.href = "cart.html";
});
//TODO création modale Panier
const cartModale = new Cart({});
