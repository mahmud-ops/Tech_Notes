let next = document.getElementById("next");
let prev = document.getElementById("prev");
let images = [
    "Images/JS/Add_elements_1.png",
    "Images/JS/Add_elements_2.png",
    "Images/JS/Add_elements_3.png",
    "Images/JS/Add_elements_4.png"
];
let img = document.getElementById("image");

let i = 0;
next.addEventListener("click",()=>{
    i++;
    if(i >= images.length){
        i = 0;
    }
    image.setAttribute("src", `${images[i]}`);

});

prev.addEventListener("click",()=>{
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    image.setAttribute("src", `${images[i]}`);

});
