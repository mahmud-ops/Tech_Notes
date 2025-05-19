
function calculate(){
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value/100;
    const year = document.getElementById("year").value;


    const result = (principal*Math.pow((1 + rate),year)).toLocaleString(undefined,{style:"currency", currency:"BDT"});
    document.getElementById("total").textContent = `${result}`;
}

