"use strict"

type Article = {id:number, title: string, price: number, description: string, category: string, image: string}
import TemplateHome from "./templateHome.js"

export default class TemplateModale extends TemplateHome{
    constructor(){
        super()
        this.onClick()
    }


    async onClick() {
        // const response = await fetch("https://fakestoreapi.com/products")
        // if (response.ok) {
        //     await response.json()
            this.homepageItems?.forEach((homepageItem) => {
                homepageItem.addEventListener("click", () => {
                    console.log("ca marche");
                    
                })
            })
        }
    // }


}