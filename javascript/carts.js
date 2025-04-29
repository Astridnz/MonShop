"use strict";
export default class Cart {
    id;
    userId;
    products;
    date;
    constructor(data) {
        this.id = data["id"];
        this.userId = data["userId"];
        this.products = data["products"];
        this.date = data["date"];
    }
}
