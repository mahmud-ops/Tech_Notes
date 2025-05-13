const car = {
    Name : "Pagani zonda cinque",
    body : {
        color : "White",
        material : "Carbotitanium",
        door : "Swan",
        frame : "Tubular",
    }
}

for(property in car.body){
    console.log(car.body[property]);
}