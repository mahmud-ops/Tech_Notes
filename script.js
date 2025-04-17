let username = window.prompt("Enter your username : ");
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLocaleLowerCase();
console.log(username);