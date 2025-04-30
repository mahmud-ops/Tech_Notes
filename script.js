let submit = document.getElementById("submit");
let displayText = document.getElementById("displayText");
let displayImage = document.getElementById("displayImage");

let values = [];
let diceImages = [];

function rollDice(){ // submit button
    let diceNumber = document.getElementById("diceNumber").value;
    for(let i = 0 ; i < diceNumber ; i++){
        value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        diceImages.push(`<img src = "Dice_images/Dice_${value}.png" alt = "dice : ${values}">`);
    }

    console.log(values);
    displayText.textContent = `${values.join(' , ')}`;
    displayImage.innerHTML = `${diceImages.join(' ')}`;
    values.length = 0;  // Refresh the array
    diceImages.length = 0;  // Refresh the array
}