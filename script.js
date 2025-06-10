let button = document.getElementById("mybtn");
let img = document.querySelector("img");

button.addEventListener("click" , event => {
    if(button.textContent == "Hide"){
        // Button styling
        button.textContent = "Show";
        button.style.background = "red";

        // Toggling visibilty of the img
        img.style.visibility = "hidden";
    }
    else{
        button.textContent = "Hide";
        button.style.background = "green";

        img.style.visibility = "visible";
    }
})