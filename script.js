function goToUni(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {    
            let wentTOuni = true;
            if(wentTOuni){
                resolve("You went to university.");
            }
            else{
                reject("You didn't go to university.");
            }
        },3000)
    })
}

function goToTuition(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
            let wentToTuition = true;
            if(wentToTuition){
                resolve("You went to tuition.");
            }
            else{
                reject("You didn't go to tuition.");
            }
        }, 2000);
    })
}

function learnJS(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let learnedJS = true;
            if(learnedJS){
                resolve("You've learned JS.");
            } 
            else{
                reject("You didn't learn JS.");
            }
        }, 1500);
    }) 
}

goToUni()
    .then(value => {
        console.log(value);
        return goToTuition();
    })

    .then(value => {
        console.log(value);
        return learnJS();
    })

    .then(value => {
        console.log(value);
        console.log("All tasks are finished successfully.");
    })

    .catch(error => {
        console.error(error);
    })