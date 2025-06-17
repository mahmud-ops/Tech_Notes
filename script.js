function cleanRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let roomCleaned = false;
            if (roomCleaned) {
                resolve("Room cleaned.");
            } else {
                reject("You didn't clean the room."); // Reject
            }
        }, 1000);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let trashTakenOut = false;
            if (trashTakenOut) {
                resolve("Trash is taken out.");
            } else {
                reject("You forgot to take out the trash.");
            }
        }, 500);
    });
}

function doHomework() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let homeworkDone = true;
            if (homeworkDone) {
                resolve("Homework is done.");
            } else {
                reject("You didn’t do your homework.");
            }
        }, 1500);
    });
}

// Call by using method chaining
doHomework()
    .then(value => {
        console.log(value);
        return cleanRoom();
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("Finished all tasks.");
    })

    // Error
    .catch(error => {
        console.log("❌ Something went wrong:", error);
    });
