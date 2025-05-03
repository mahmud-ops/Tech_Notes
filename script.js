function car(make , name , year , color , callback){ // Constructor
    this.make = make,
    this.name = name,
    this.year = year,
    this.color = color

    callback.call(this);
}

const display = function(){
    console.log(`Make : ${this.make}`);
    console.log(`Name : ${this.name}`);
    console.log(`Year : ${this.year}`);
    console.log(`Color : ${this.color}`);
}
const car_1 = new car("Ford" , "Mustang" , "2022" , "Blue" , display);
const car_2 = new car("Toyota" , "Supra" , "2024" , "zet black" , display);