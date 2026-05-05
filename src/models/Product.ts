import idGenerator from "./IdGenerator.js";


export abstract class Product {
    productId: number = idGenerator.generateId();
    name: string = "";
    weight: number = 0;
    price: number = 0;

    constructor(name: string, weight: number, price: number){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }

    displayDetails(){
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price} €`;
    }
}