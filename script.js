class Animal {
    isAlive = true;
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

class Rabit extends Animal {
    constructor(name , age , runSpeed){
        super(name , age); // Called super
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name , age , swimSpeed){
        super(name , age); 
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name , age , flySpeed){
        super(name , age); 
        this.flySpeed = flySpeed;
    }
}

const rabit = new Rabit("Bugs Bunny", 1, 25);
console.log(`${rabit.name} is ${rabit.age} years old, his running speed is ${rabit.runSpeed} mph.`);

const fish = new Fish("Nemo", 2, 10);
console.log(`${fish.name} is ${fish.age} years old, his swimming speed is ${fish.swimSpeed} mph.`);

const hawk = new Hawk("Sky Hunter", 3, 60);
console.log(`${hawk.name} is ${hawk.age} years old, his flying speed is ${hawk.flySpeed} mph.`);
