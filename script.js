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
}

class Hawk extends animal{ // Hawk is a child class of animal
    name = "hawk";
}

const rabbit = new Rabbit();
const hawk = new Hawk();

rabbit.sleep();
hawk.sleep();