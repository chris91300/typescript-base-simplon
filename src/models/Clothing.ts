import { ClothingSize } from "../enums/ClothingSize.js";
import { Product } from "./Product.js";


export class Clothing extends Product {
 size: ClothingSize = ClothingSize.M;

 constructor(name: string, weight: number, price: number, size: ClothingSize){
    super(name, weight, price);
    this.size = size;
 }

 displayDetails(){
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight.toFixed(1)} gr, Price: ${this.price.toFixed(2)} €, size: ${this.size}`;
    }
}