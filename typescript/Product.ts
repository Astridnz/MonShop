"use strict"
// class créée pour avoir le squelette d'un produit
export default class Product{
    public id: number;
    public title: string
    public price: number
    public description: string 
    public category: string 
    public image: string 
    
    //on lie les propriétés de cette class avec les valeurs des data choisies en paramètre (ici ça sera les data de notre api)
    constructor(data: Object)
    {
        this.id = data["id"];
        this.title = data["title"]
        this.price = data["price"]
        this.description = data["description"]
        this.category = data["category"]
        this.image = data["image"]
    }
}

