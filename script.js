function numberLength(value){
    let digit_count = 0;

       if(value == 0){
            digit_count = 1;
        }

    while(value > 0){
        value /= 10;
        value = Math.floor(value);
        digit_count++;

    }
    return digit_count;
}

console.log("Example:");
console.log(numberLength(23));