const newElement = document.createElement("h1");
newElement.textContent = "New element"
newElement.style.color = "white"
document.getElementById("div-1").append(newElement); 

document.getElementById("div-1").removeChild(newElement); // Removed element