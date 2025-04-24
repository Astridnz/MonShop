"use strict";
import TemplateHome from "./templateHome.js";
export default class TemplateModale extends TemplateHome {
    constructor() {
        super();
        this.onClick();
    }
    async onClick() {
        // const response = await fetch("https://fakestoreapi.com/products")
        // if (response.ok) {
        //     await response.json()
        this.homepageItems?.forEach((homepageItem) => {
            homepageItem.addEventListener("click", () => {
                console.log("ca marche");
            });
        });
    }
}
