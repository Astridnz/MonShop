"use strict"


import Product from "./Product.js"

// type Article = {id:number, title: string, price: number, description: string, category: string, image: string}






    template: 
    blogFragment: DocumentFragment | undefined
    container
    homepageItems: HTMLElement[] | null
    img: HTMLImageElement[] | null

    articleTitle
    articleImg
    articlePrice
    


        const container: HTMLDivElement | null = document.querySelector(".templateContainer")
        const template: HTMLTemplateElement | null= document.querySelector("template")

        const blogFragment = template?.content

        const homepageItems = Array.from(this.blogFragment.querySelectorAll(".homepageItem"))
        const img = Array.from(this.blogFragment.querySelectorAll("img"))
        const articleTitle: HTMLHeadingElement | null = this.blogFragment.querySelector("h3")
        const articleImg: HTMLImageElement | null = this.blogFragment.querySelector("img")
        const articlePrice: HTMLParagraphElement | null = this.blogFragment.querySelector(".prix")

        // this.cloneFetchHome()
    }

    async cloneFetchHome() {
        const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok) {
            const articles = await response.json()
            // console.log(articles);
            articles.forEach((article: Article) => {
                this.homepageItems?.forEach((homepageItem) => {
                    homepageItem.id = `${article.id}`
                })
                if (this.articleTitle) {
                    this.articleTitle.textContent = article.title
                }

                if (this.articleImg) {
                    this.articleImg.src = article.image
                }
                if (this.articlePrice) {
                    // console.log(this.articleImg);
                    this.articlePrice.textContent = `${article.price.toString()}€`
                }

                const clone = this.blogFragment?.cloneNode(true) as DocumentFragment
                this.container?.append(clone)

            })
            this.homepageItems = Array.from(document.querySelectorAll(".homepageItem"))
            
            this.homepageItems?.forEach((homepageItem) => {
                console.log(homepageItem);
                homepageItem.addEventListener("click", () => {
                    //    TemplateModale.classList.add("open") 
                })
            })
        }
    }
}
        
        
        


































    //     if (response.ok)
    //     return
    //     const articles = await response.json()

    //     .then()
    //     articles.forEach((article: any) => {
            
    //     });
    // const clone = this.blogFragment?.cloneNode(true) as DocumentFragment
    // console.log(clone);
    // if (clone) {
    //     this.container?.append(clone)
    // }