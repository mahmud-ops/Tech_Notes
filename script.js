let list = document.getElementById("fruits");
let fruits = document.querySelectorAll("li");

let topElement = document.createElement("li");
let bottomElement = document.createElement("li");
let newFruit = document.createElement("li");


topElement.textContent = "Pinapple";
topElement.style.backgroundColor = "yellow"

bottomElement.textContent = "Kiwi";
bottomElement.style.backgroundColor = "lightgreen"

newFruit.textContent = "Coconut";
newFruit.style.backgroundColor = "tomato";

list.prepend(topElement) // Pinapple on top
list.appendChild(bottomElement); // Kiwi at the bottom
list.insertBefore(newFruit , fruits[1]); // Coconut at before orange