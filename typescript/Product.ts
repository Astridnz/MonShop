"use strict"

export default class Product{
    id: number 
    title: string
    price: number
    description: string 
    category: string 
    image: string 
    
    
    constructor()
    {
        this.id = 2
        this.title= ""
        this.price=1
        this.description=""
        this.category=""
        this.image=""
    }
    
    
    
    // const blabla = new Produit
    async fetchArticle() {
    type Article = {id:number, title: string, price: number, description: string, category: string, image: string}
    const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok) {
            const articles: Article[] = await response.json()
        articles.forEach((article:Article) => {
            console.log(article.description);
            this.id = article.id
        })
    }
}
 }

