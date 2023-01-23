//AbstractClass 
//Abstract class is a class which can't be instantiated and require subclasses which inherit from a particular abstract class to prvide implementations. We will change the animal Calss to an aabstract class . it well not be possible to create a instance o this class anymore like on silde number 3 and we will mark makeSound as an abstract method - in order to use it , a subclass must declare its own implementation of this method.
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (this.constructor === Animal) {
            throw new Error("Can't instantiate abstract class!");
        }
        
    }
    makeSound() {
        throw new Error("You must implement makeSound method")
    }
   
}

