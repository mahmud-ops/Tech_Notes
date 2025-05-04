//Parent class
class animal{
    isAlive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

//Child class
class Rabbit extends animal{ // Rabbit is a child class of animal
    name = "rabbit";
    run(){
        console.log(`The ${this.name} is running`);
    }
}

class Hawk extends animal{ // Hawk is a child class of animal
    name = "hawk";
    fly(){
        console.log(`The ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const hawk = new Hawk();

rabbit.run(); // The rabbit is running
hawk.fly(); // The hawk is flying
hawk.run(); // Error (A child can't access a method from another child)