import type { ShoeSize } from "../enums/ShoeSize.js";
import { Product } from "./Product.js";
export declare class Shoes extends Product {
    size: ShoeSize;
    constructor(name: string, weight: number, price: number, size: ShoeSize);
    displayDetails(): string;
}
//# sourceMappingURL=Shoes.d.ts.map