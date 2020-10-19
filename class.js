class PenDrive {
    constructor(capacity,color,price) {
        this.capacity = capacity
        this.color = color;
        this.price =price;
    }
}

const ignite = new PenDrive('43GB','while',1300);
console.log(ignite);
const oakwood = new PenDrive('128','black',2300);
console.log(oakwood);