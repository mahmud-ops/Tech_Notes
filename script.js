function sum(callback , x , y ){
    let result = x + y;
    callback(result);
}

function showResult(result){
    console.log(result);
}

sum(showResult , 5 , 6); // showresult() gets ivoked right after sum.