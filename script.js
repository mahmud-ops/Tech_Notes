class person{
    constructor(firsName , lastName , age){
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
    }
// Setters
    set firsName(newFirstName){
        if(typeof(newFirstName) === 'string' && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error(`Name should be a string.`)
        }
    }

    set lastName(newLastName){
        if(typeof(newLastName) === 'string' && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error(`Name should be a string.`);
        }
    }

    set age(newAge){
        if(typeof(newAge) === 'number'){
            this._age = newAge;
        }
        else{
            console.error(`Age should be a number`);
        }
    }
// Getters
    get firsName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
    
    get age(){
        return this._age;
    }
}

const person1 = new person("Abdullah","Al Mahmud",21);

console.log(`Name = ${person1.firsName} ${person1.lastName}`);
console.log(`Age = ${person1.age}`);