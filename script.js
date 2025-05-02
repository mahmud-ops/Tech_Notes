const numbers = [1,23,4,5,6,78,9];
const square = numbers.map(function(element){
    return Math.pow(element,2);
})

console.log(square);