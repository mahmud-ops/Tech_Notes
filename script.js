let timeoutID;

function start(){
    timeoutID = setTimeout(() => window.alert(`Hello`),5000);
    console.log(`Started`);
    
}

function clear(){
    clearTimeout(timeoutID);
    console.log(`Cancelled`);
}