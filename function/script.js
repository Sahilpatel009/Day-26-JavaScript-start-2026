class Dog {
    constructor(name, breed) {
      
        // instance property  
        this.name = name;   
        this.breed = breed; 
    }

    // defining method
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// creating an object (instance)
const myDog = new Dog("Rayne", "Husky");
myDog.bark();