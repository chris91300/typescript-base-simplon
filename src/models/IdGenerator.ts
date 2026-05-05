

class IdGenerator {
    
    private id: number = 1;

    constructor(){}    

    generateId = () => {
        const currentId = this.id;
        this.id++;
        return currentId;
    }
}

const idGenerator = new IdGenerator();
export default idGenerator;