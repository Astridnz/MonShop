"use strict";
import Burger from "./burger.js";
import TemplateHome from "./templateHome.js";
import TemplateModale from "./templateModale.js";
//? Ajout le burger menu en dimension phone/tablette
if (window.matchMedia('screen and (max-width:1023px)').matches) {
    const burger = new Burger();
    burger.toggle(burger.nav);
    burger.logoClick();
}
//? Ajout du template article Home
const template = new TemplateHome();
template.cloneFetchHome();
//? Ajout du template aritcle Modale
// document.addEventListener("DOMContentLoaded", () => {
const template2 = new TemplateModale();
