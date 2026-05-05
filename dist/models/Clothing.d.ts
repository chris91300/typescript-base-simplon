import { ClothingSize } from "../enums/ClothingSize.js";
import { Product } from "./Product.js";
export declare class Clothing extends Product {
    size: ClothingSize;
    constructor(name: string, weight: number, price: number, size: ClothingSize);
    displayDetails(): string;
}
//# sourceMappingURL=Clothing.d.ts.map