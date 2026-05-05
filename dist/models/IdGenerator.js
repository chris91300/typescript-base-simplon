class IdGenerator {
    id = 1;
    constructor() { }
    generateId = () => {
        const currentId = this.id;
        this.id++;
        return currentId;
    };
}
const idGenerator = new IdGenerator();
export default idGenerator;
//# sourceMappingURL=IdGenerator.js.map