import idGenerator from "./IdGenerator.js";
export class Customer {
    customerId = idGenerator.generateId();
    name = "";
    email = "";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    displayInfo = () => {
        return `Customer ID: ${this.customerId}, Name: ${this.name}, Email: ${this.email}`;
    };
}
//# sourceMappingURL=Customer.js.map