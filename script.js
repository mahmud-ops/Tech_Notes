let fruits = ["apple" , "orange" , "banana" , "pinapple"];

function upperCase(element , index , array){
    array[index] = element.slice(0,1).toUpperCase() + element.slice(1);
}

fruits.forEach(upperCase);
console.log(fruits);