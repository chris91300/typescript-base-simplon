import type { Customer } from "./Customer.js";
import type { Product } from "./Product.js";
export declare class Order {
    orderId: number;
    customer: Customer | null;
    productList: Product[];
    orderDate: Date | null;
    constructor(customer: Customer);
    addProduct(product: Product): void;
    removeProduct(productId: number): void;
    calculateWeight(): number;
    calculateTotal(): number;
    displayOrder(): void;
    displayCustomerDetails(): void;
    displayProductDetails(): void;
    displayTotalWeight(): void;
    displayTotalPrice(): void;
}
//# sourceMappingURL=Order.d.ts.map