let box = document.getElementById("box");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Clicked";
}

box.addEventListener("click" , changeColor);