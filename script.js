const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
         display.value = eval(display.value);

         if(isNaN(display.value)){
            throw new Error();
         }
    } catch (error) {
        display.value = "Syntax error"
        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}