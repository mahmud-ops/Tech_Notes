let Name = "Abdullah Al Mahmud";
let firstName = Name.slice(0 , Name.indexOf(" ")); //From index 0 to the 1st empty space.
let lastName = Name.slice(Name.indexOf(" ") + 1); //`+ 1` : gotta start from after the 1st space , not from the 1st space.

console.log(firstName); 
console.log(lastName); 