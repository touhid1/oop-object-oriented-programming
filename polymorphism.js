//Polymorphism 
//Polymorphism is a concept that utilizes inheritance for reusing methods multiple times with a different behaviour depending on class types. To understand this lets look at our example -in the dog class we will remove the bark method and in the animal class we'lladd a make Sound method which will be overridden by cat and dog classes.

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        return (
            `Some nice sound made`
        )
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    makeSound() {
        return 'Bark';
    }
}

//------------------Polymorphism------------------

class Cat extends Animal {
    constructor(name, age, weight) {
        super(name, age);
        this.weight = weight;
    }
    makeSound() {
        return 'Meow';
    }
}

const myDog = new Dog('Rex', 2, 'Sh ');
const myCog = new Dog('whiskers', 1, '5kg');

console.log(myDog.makeSound());
console.log(myCog.makeSound());