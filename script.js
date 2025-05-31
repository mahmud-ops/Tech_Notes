let listElement = document.querySelector("li");
let firstList = document.querySelectorAll("ol")[0];
let secondList = document.querySelectorAll("ol")[1];
let thirdList = document.querySelectorAll("ol")[2];


listElement.style.backgroundColor = "cyan";
listElement.nextElementSibling.style.backgroundColor = "yellow";

secondList.firstElementChild.style.backgroundColor = "pink";
secondList.lastElementChild.style.backgroundColor = "gray";

document.querySelectorAll("li")[11].parentElement.style.backgroundColor = "coral";