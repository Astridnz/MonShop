"use strict"

export default class Product{
    public id: number;
    public title: string
    public price: number
    public description: string 
    public category: string 
    public image: string 
    
    
    constructor(data: Object)
    {
        this.id = data["id"];
        this.title = data["title"]
        this.price = data["price"]
        this.description = data["description"]
        this.category = data["category"]
        this.image = data["image"]
    }
    
    
    
    // const blabla = new Produit
    async fetchArticle() {
    type Article = {id:number, title: string, price: number, description: string, category: string, image: string}
    const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok) {
            const articles: Article[] = await response.json()
        
            // this.id = articles[].id
            // this.title = articles[].title
            // this.price = articles[].price
            // this.description = articles[].description
            // this.category = articles[].category
            // this.image = articles[].image
        
    }
}
}

