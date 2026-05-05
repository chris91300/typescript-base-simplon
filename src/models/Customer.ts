import idGenerator from "./IdGenerator.js";

export class Customer {
    customerId: number = idGenerator.generateId();
    name: string = "";
    email: string = "";

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    displayInfo = (): string => {
        return `Customer ID: ${this.customerId}, Name: ${this.name}, Email: ${this.email}`;
    }
}