import idGenerator from "./IdGenerator.js";
export class Order {
    orderId = idGenerator.generateId();
    customer = null;
    productList = [];
    orderDate = null;
    constructor(customer) {
        this.customer = customer;
        this.orderDate = new Date();
    }
    addProduct(product) {
        this.productList.push(product);
    }
    removeProduct(productId) {
        const newProductList = this.productList.filter(p => p.productId != productId);
        this.productList = newProductList;
    }
    calculateWeight() {
        const totalWeight = this.productList.reduce((total, p) => total + p.weight, 0);
        return totalWeight;
    }
    calculateTotal() {
        const totalPrice = this.productList.reduce((total, p) => total + p.price, 0);
        return totalPrice;
    }
    displayOrder() {
        console.log();
        console.log();
        console.log(`**********     Order ${this.orderId}   **********`);
        console.log();
        this.displayCustomerDetails();
        console.log();
        this.displayProductDetails();
        console.log();
        this.displayTotalWeight();
        console.log();
        this.displayTotalPrice();
        console.log(`*********************************************`);
    }
    displayCustomerDetails() {
        this.customer?.displayInfo();
    }
    displayProductDetails() {
        if (this.productList.length != 0) {
            console.log("   PRODUITS");
            this.productList.forEach((product) => {
                console.log(`-- ${product.displayDetails()}`);
            });
        }
        else {
            console.log("AUCUN PRODUIT DANS LE PANIER");
        }
    }
    displayTotalWeight() {
        console.log(`POIDS DU COLIS : ${(this.calculateWeight() / 1000).toFixed(1)} kg`);
    }
    displayTotalPrice() {
        console.log(`TOTAL : ${this.calculateTotal().toFixed(2)} €`);
    }
}
//# sourceMappingURL=Order.js.map