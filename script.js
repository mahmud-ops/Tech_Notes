
function container(){
    let count = 1; 
    function increase(){
    count++;
    console.log(count);
}    
return {increase}
}

const counter = container();

counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();