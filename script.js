function setCookie(name , value , daysToLive){
    const date = new Date();
    
    date.setTime(date.getTime() + (daysToLive * 86400 * 1000 /*Converting days into ms*/))
    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/`
}

setCookie("email","mahmud123@gmail.com",365);
console.log(document.cookie);

