import idGenerator from "./IdGenerator.js";
export class Product {
    productId = idGenerator.generateId();
    name = "";
    weight = 0;
    price = 0;
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    displayDetails() {
        return `Product ID: ${this.productId}, Name: ${this.name}, Weight: ${this.weight}, Price: ${this.price} €`;
    }
}
//# sourceMappingURL=Product.js.map