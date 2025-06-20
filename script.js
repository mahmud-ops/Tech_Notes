function setCookie(key,value,dayToLive){
    let date = new Date()
    date.setTime(date.getTime() + dayToLive * 86400000);
    let expires = date.toUTCString();
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=/`
    console.log(document.cookie);
}

// Function to delete a cookie by name
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

setCookie("lastName","Mahmud",365);
// Example usage
deleteCookie("name");
