//Inheritance
//Class inheritance is a feature that enables certain classes to take all the methods and properties of another one (parent class) and makes it possible to extend the parent class by adding more 

class Dog extends Animal {
    constructor (name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        return 'Bark';
    }
}

class Cat extends Animal {
    constructor (name, age, weight){
        super(name, age);
        this.weight = weight;
    }
    
}
 
const myDog = new Dog('Rex', 2, 'German Shepherd');
console.log(myDog.getInfo);
console.log(myDog.breed);
console.log(myDog.bark());

const myCat = new Cat('Mia', 1, '5kg');
console.log(myCat.getInfo());
console.log(myCat.weight);
