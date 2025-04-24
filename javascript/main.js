"use strict";
import Burger from "./burger.js";
import TemplateHome from "./template.js";
//? Ajout le burger menu en dimension phone/tablette
if (window.matchMedia('screen and (max-width:1023px)').matches) {
    const burger = new Burger();
    burger.toggle(burger.nav);
    burger.logoClick();
}
//?Ajout du template article 
const template = new TemplateHome();
template.cloneFetch();
