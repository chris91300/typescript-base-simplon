
import type { ShoeSize } from "../enums/ShoeSize.js";
import { Product } from "./Product.js";


export class Shoes extends Product {
 size: ShoeSize;

 constructor(name: string, weight: number, price: number, size: ShoeSize){
    super(name, weight, price);
    this.size = size;
 }

 displayDetails(){
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight.toFixed(1)} gr, Price: ${this.price.toFixed(2)} €, size: ${this.size}`;
    }
}