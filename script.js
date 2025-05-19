
function calculate(){
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value/100;
    let year = document.getElementById("year").value;

    // Validation check
    if (principal < 0 || rate < 0 || year < 0 || isNaN(principal) || isNaN(rate) || isNaN(year)) {
        window.alert(`Invalid input`);

        document.getElementById("principal").value = " ";
        document.getElementById("rate").value = " ";
        document.getElementById("year").value = " ";

        result = 0;
    }


    let result = (principal*Math.pow((1 + rate),year)).toLocaleString(undefined,{style:"currency", currency:"BDT"});
    document.getElementById("total").textContent = `${result}`;
}

