function runClock(){
    const clock = document.getElementById("clock");

    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0); // Padstart puts 0 to make the string length 2.
    const minutes = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    
    let meridien = hour > 12 ? "PM" :  "AM";
    hour = hour % 12 || 12;
    

    let time = `${hour}:${minutes}:${second} ${meridien}`;
    clock.textContent = time;
}

runClock();
setInterval(runClock , 1000); //setInterval calls the function after every 1000ms / 1s.