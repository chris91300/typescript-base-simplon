import { Product } from "./Product.js";
export class Shoes extends Product {
    size;
    constructor(name, weight, price, size) {
        super(name, weight, price);
        this.size = size;
    }
    displayDetails() {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight.toFixed(1)} gr, Price: ${this.price.toFixed(2)} €, size: ${this.size}`;
    }
}
//# sourceMappingURL=Shoes.js.map