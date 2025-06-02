const newElement = document.createElement("h1");

const div = document.getElementById("div-2"); // Selecting div

newElement.textContent = "New element"

div.parentNode.insertBefore(newElement,div); // Here parentNode is "div-contaier"