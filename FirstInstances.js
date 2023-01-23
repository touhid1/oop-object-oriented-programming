//On The previous slide we created a new class , added a constructor method that takes in 2 arguments-name and age. To create an object from this constructor method we need to use the new keyword and pass in the given name and age ofthe animal object that we are creating. We also have added a getinfo method that returns the information about the object

const firstAnimal = new Animal('Lion', 5);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

const secondAnimal = new Animal('Tiger', 3);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());