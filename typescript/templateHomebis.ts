"use strict"


import Product from "./Product.js"

type Article = {id:number, title: string, price: number, description: string, category: string, image: string}


        const container: HTMLDivElement | null = document.querySelector(".templateContainer")
        const template: HTMLTemplateElement | null= document.querySelector("template")

        const blogFragment: DocumentFragment | undefined = template?.content

        const homepageItems: HTMLElement[] | null = Array.from(blogFragment!.querySelectorAll(".homepageItem"))
        const img: HTMLImageElement[] | null = Array.from(blogFragment!.querySelectorAll("img"))
        const articleTitle: HTMLHeadingElement | null = blogFragment!.querySelector("h3")
        const articleImg: HTMLImageElement | null = blogFragment!.querySelector("img")
        const articlePrice: HTMLParagraphElement | null = blogFragment!.querySelector(".prix")

        cloneFetchHome()

    async function cloneFetchHome() {
        const response = await fetch("https://fakestoreapi.com/products")
        if (response.ok) {
            const articles = await response.json()
            // console.log(articles);
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
                    // console.log(articleImg);
                    articlePrice.textContent = `${article.price.toString()}€`
                }

                const clone = blogFragment?.cloneNode(true) as DocumentFragment
                container?.append(clone)

            })
            const homepageItems = Array.from(document.querySelectorAll(".homepageItem"))
            
            homepageItems?.forEach((homepageItem) => {
                console.log(homepageItem);
                homepageItem
                
                
                })
            }
        }
    

        
        
        


































    //     if (response.ok)
    //     return
    //     const articles = await response.json()

    //     .then()
    //     articles.forEach((article: any) => {
            
    //     });
    // const clone = blogFragment?.cloneNode(true) as DocumentFragment
    // console.log(clone);
    // if (clone) {
    //     container?.append(clone)
    // }