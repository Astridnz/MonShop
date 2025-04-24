"use strict"

type Article = {id:number, title: string, price: number, description: string, category: string, image: string}




export default class TemplateHome{

template: HTMLTemplateElement|null 
blogFragment: DocumentFragment|undefined
container:HTMLDivElement|null
homepageItems:HTMLElement[]|null

templateTitle: HTMLHeadingElement | null
templateImg: HTMLImageElement | null
templatePrice: HTMLParagraphElement | null

constructor() {

        this.container = document.querySelector(".templateContainer")
        this.template = document.querySelector("template")
        this.blogFragment = this.template?.content!
        
        this.homepageItems = Array.from(this.blogFragment.querySelectorAll(".homepageItem"))
        this.templateTitle = this.blogFragment.querySelector("h3")
        this.templateImg = this.blogFragment.querySelector("img")
        this.templatePrice = this.blogFragment.querySelector(".prix")
        
        // this.cloneFetchHome()
    }

    async cloneFetchHome(){
            const response = await fetch ("https://fakestoreapi.com/products")
            if (response.ok){
                const articles = await response.json()
                console.log(articles);
                articles.forEach((article: Article)=>{
                    // console.log(article);
                    this.homepageItems?.forEach((homepageItem)=>{
                        homepageItem.id = `${article.id}`
                    })
                    if(this.templateTitle){
                        this.templateTitle.textContent = article.title
                    }

                    if(this.templateImg){
                        this.templateImg.src = article.image
                    }
                    if(this.templatePrice){
                        // console.log(this.templateImg);
                        this.templatePrice.textContent = `${article.price.toString()}€`
                    }
                    const clone = this.blogFragment?.cloneNode(true) as DocumentFragment
                    this.container?.append(clone)
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