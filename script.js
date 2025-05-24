let display = document.getElementById("display");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let time = null;

function start_time(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(update,10);
        isRunning = true;
    }
}
function stop_time(){
    clearInterval(time);
    isRunning = false; 
    display.textContent = `${hoursString}:${minutesString}:${secondsString}:${miliSecondssString}`;
}
function reset_time(){
    clearInterval(time);
    isRunning = false;
    elapsedTime = 0; // reset the timer

    display.textContent = `00:00:00:00`;
    
}
function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime; // Formula for starting from 0

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % (1000)/10);

    let hoursString = String(hours).padStart(2,0);
    let minutesString = String(minutes).padStart(2,0);
    let secondsString = String(seconds).padStart(2,0);
    let miliSecondssString = String(miliSeconds).padStart(2,0);

    display.textContent = `${hoursString}:${minutesString}:${secondsString}:${miliSecondssString}`;
}