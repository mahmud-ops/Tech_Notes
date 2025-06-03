let boxes = document.querySelectorAll(".box");

let newElement = document.createElement("h1");
newElement.textContent = "New element";

let parent = document.getElementById("div-container");
parent.insertBefore(newElement, boxes[1]);
