class Animal {
    constructor (name){
        this.name = name;
    }

    makeSound () {
        console.log("Generic Animal Sound!!")
    }
}
class Dog extends Animal { 
    constructor (name) {
        super(name);
    }
    makeSound () {
        super.makeSound()
        console.log("Woof woof!")
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("MEOWWWW!")
    }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");
const a3 = new Cat("Kit");

a1.makeSound();
a2.makeSound();
a3.makeSound()