//Encapsulation
//Encapsulation is a restriction mechanism making accessing the data inpossible without using special methods dedicated for this . In the example below we marked weight as a private property and in order to get and set a value we need to use the getter and setter method  

class Cat extends Animal {
    #weight; //private property
    constructor (name, age, weight){
        super(name, age);
        this.#weight = weight;
    }

    getWeight(){ //getter method
        return this.#weight;
    }

    setWeight(weight){ //setter method
        this.#weight = weight;
    }
}

const myCat = new Cat('Mia', 1, '5kg');
console.log(myCat.getWeight());
myCat.setWeight('6')
console.log(myCat.getWeight());