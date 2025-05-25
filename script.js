
try{
    let dividend = Number(window.prompt("Enter dividend:"));
    let divisor = Number(window.prompt("Enter divisor:"));

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Input must be a number.");
    }
    if(divisor == 0){
        throw new Error("You can't divide by 0.") // Error
    }

    let result = dividend / divisor ;
    
    console.log(`Result = ${result}`);
}
catch(error){
    console.error(error);
}