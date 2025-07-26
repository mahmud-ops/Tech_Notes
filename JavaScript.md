## JavaScript
[Video tutorial](https://youtu.be/lfmg-EJ8gm4)

**I know the basics (Data type variable stuff)**

[SKipped to 45 mins](https://youtu.be/lfmg-EJ8gm4?t=2693)

**Project :** Counter

```JS
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
```
Built-in object that provides a collection 
of properties and methods

## Math objects
```JS

let x = 3;
let y = 2;
let z = 1;

z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x, y);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);
z = Math.abs(x);
z = Math.sign(x);
```

**Project :** Random Number Generator:
```JS
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="myButton">roll</button><br>
    <label id="label1" class="my"></label><br>
    <label id="label2"></label><br>
    <label id="label3"></label><br>
    <script src="index.js"></script>
</body>
</html>


const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3; 
}
```  
## Checked
[Video](https://youtu.be/SgxzJdqhyfw?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input name="payment" type="radio" id="Bkash"><label for="Bkash">Bkash</label><br>
    <input name="payment" type="radio" id="Nagad"><label for="Nagad">Nagad</label><br>
    <input name="payment" type="radio" id="COD"><label for="COD">Cash on delivery</label><br>

    <br>
    <input type="submit" name="submit" id="submit">

    <p id="text"></p>
    <script>
        let bkash = document.getElementById("Bkash");
        let nagad = document.getElementById("Nagad");
        let cod = document.getElementById("COD");
        let text = document.getElementById("text");

document.getElementById("submit").onclick = function() {
        if (bkash.checked) {
        text.textContent = "You're paying with Bkash";
        } else if (nagad.checked) {
            text.textContent = "You're paying with Nagad";
        } else if (cod.checked) {
           text.textContent = "You're paying with COD";
        } else {
        text.textContent = "Please select a payment method";
        }
    }
    </script>
</body>
</html>
```
## Ternary operator

*conditin ? if_true : if_false ;*

```js
let age = 12;
let messege = age >= 18 ? "Adult" : "Minor";

console.log(messege);
```
## switch statement
switch is like a multiple choice question for your code.
It checks the value of a variable, and runs the matching case.

**Format**

```js
switch(variable) {
  case value1:
    // do something
    break;
  case value2:
    // do something else
    break;
  default:
    // if nothing matches
}
```
**Example**

```js
    var day = 2;

    switch(day){
        case 1:
            console.log("It's Saturday");
            break;
        case 2:
            console.log("It's Sunday");
            break;
        case 3:
            console.log("It's Monday");
            break;
        case 4:
            console.log("It's Tuesday");
            break;
        case 5:
            console.log("It's Wednesday");
            break;
        case 6:
            console.log("It's Thursday");
            break;
        case 7:
            console.log("It's Friday");
            break;
        default:
            console.log("Invalid day!");
    }
```

## String methods
String methods are built-in tools in JavaScript that help you work with text (called strings).

You can use them to:

- Find something in a string
- Change part of the string
- Make it uppercase/lowercase
- Cut or split the string
- Add new text

**Example**

```js
let name = "Mahmud";

// Makes it uppercase
console.log(name.toUpperCase()); // "MAHMUD"

// Checks if it includes "mud"
console.log(name.includes("mud")); // true

// Gets part of the string
console.log(name.slice(0, 3)); // "Mah"
```

**Common String Methods**

| Method          | What it does                                   | Example/Output                               |
|-----------------|------------------------------------------------|----------------------------------------------|
| `length`        | Counts characters                              | `"Mahmud".length` -> `6`                     |
| `toUpperCase()` | Makes all letters BIG                          | `"Mahmud".toUpperCase()` -> `"MAHMUD"`       |
| `toLowerCase()` | Makes all letters small                        | `"Mahmud".toLowerCase()` -> `"mahmud"`       |
| `includes()`    | Checks if something is inside                  | `"Mahmud".includes("mud")` -> `true`         |
| `startsWith()`  | Checks if string starts with given substring   | `"Mahmud".startsWith("Mah")` -> `true`       |
| `endsWith()`    | Checks if string ends with given substring     | `"Mahmud".endsWith("mud")` -> `true`         |
| `slice()`       | Cuts a part of the string                      | `"Mahmud".slice(0, 3)` -> `"Mah"`            |
| `replace()`     | Replaces part of the string                    | `"Mahmud".replace("mud", "mat")` -> `"Mahmat"`|
| `trim()`        | Removes spaces at the ends                     | `"  Mahmud  ".trim()` -> `"Mahmud"`          |
| `padStart()`    | Adds padding at the beginning of the string    | `"Mahmud".padStart(10, "0")` -> `"000Mahmud"`|
| `padEnd()`      | Adds padding at the ending of the string       | `"Mahmud".padEnd(10, "0")` -> `"Mahmud000"`  |

## String slicing
Slices a portion from a string

**Format:**string_name.slice(startingIndex , endingIndex);

```js
let string = "A random string";

console.log(string);
console.log(string.slice(0,9));//sliced from index 0 t0 9
console.log(string.slice(9));//sliced from index 9 t0 rest
```

**Seperating 1st and last name from full name**

In this case we don't know the length of someone's name , so , we can't specify the index for slicing first name or last name
```js
let Name = "Abdullah Al Mahmud";
let firstName = Name.slice(0 , Name.indexOf(" ")); //From index 0 to the 1st empty space.
let lastName = Name.slice(Name.indexOf(" ") + 1); //`+ 1` : gotta start from after the 1st space , not from the 1st space.

console.log(firstName); 
console.log(lastName); 
```
##  Method chaining
[Video tutorial](https://youtu.be/J4YhlDsNqeE?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)

Calling one method after another in one continuous line of code.

**Task :** Get a user name with *window.prompt* then if there's any extra space , unorganised capitalisations , the code should fix it.

`maHmuD ---> Mahmud`

**Without method chaining**

```js
let username = window.prompt("Enter your username : ");

username = username.trim();//removes extra spaces

let firstLetter = username.charAt(0);//gets character at index 0 (1st character)
firstLetter = firstLetter.toUpperCase();

let otherLetters = username.slice(1);//gets other chars from index 1
otherLetters = otherLetters.toLowerCase();
console.log(firstLetter + otherLetters);
```

**With method chaining**
```js
let username = window.prompt("Enter your username : ");
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLocaleLowerCase();
console.log(username);
```
## Strict equality (`===`) concept
[video](https://youtu.be/O7aUm0AuUy4?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)

In JavaScript, **strict equality** is written as `===`

It **compares both**:

- The **value**
- AND the **type**

No jokes, no auto type conversion — it's the "I said what I said" of comparisons.

**Loose vs Strict:**
```js
5 == "5"     // true (loose equality - just compares value)
5 === "5"    // false (strict equality - type mismatch)
```

| Operator | Name            | Compares Value?| Compares Type? | Auto Converts? |
|----------|-----------------|----------------|----------------|----------------|
| `==`     | Loose Equality  | Yes            | No             | Yes            |
| `===`    | Strict Equality | Yes            | Yes            | No             |

---

**Examples:**
```js
console.log(7 === 7);        // true (same value and type)
console.log("7" === 7);      // false (string vs number)
console.log(true === 1);     // false (boolean vs number)
console.log(null === null);  // true
```
***Same for inequality `!== (Strict inequality)`***
---
## While loop
*I already know this*
repeat some code `WHILE` some condition is true

**Example code**
```js
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}
```
## do while
It runs the code **first**, then checks the condition. So the loop body *will always execute at least once*.

---

**Example code:**
```js
let loggedIn = false;
let username;
let password;

do {
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again");
    }
} while (!loggedIn);
```
**Why use `do...while` instead of `while`?**

- `while`: **checks first**, runs only **if** condition is true.
- `do...while`: **runs once**, then checks — perfect for login prompts, menus, etc.

So if you wanna make sure something runs **at least once**, no matter what — `do...while` is your go-to.

## for loop
Repeat same code for a limited amount of time.

---

## Project 01 : Number guessing game
This code 

- 🎯 Generates a random number between min (1) and max (100).
- ⌨️ Takes user input using window.prompt() to guess the number.
- 🔁 Runs a loop (while) until the user guesses the correct number.
- 🔼 Gives a hint if the guess is too high.
- 🔽 Gives a hint if the guess is too low.
- ✅ Shows a congratulatory message and the total number of attempts when guessed correctly.
- 🔢 Uses Math.floor() and Math.random() to generate a whole number within the specified range.
- 📈 Tracks how many tries the user took using the attempts variable.
```js
let min = 1;
let max = 100;
let UserInput = window.prompt(`Enter a number form ${min} to ${max} : `);
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let isRunning = true;
let attempts = 0;

while(isRunning){
    if(UserInput > randomNumber){
        UserInput = window.prompt(`The number is lower than ${UserInput},Enter another number`);
        attempts++;
    }
    else if(UserInput < randomNumber){
        UserInput = window.prompt(`The number is higher than ${UserInput},Enter another number`);
        attempts++;
    }
    else{
        window.alert(`Congratulations,You've guessed it right in ${attempts} attempts`);
        isRunning = false;
    }
}
```
## Function
A section of reusable code . Declare it once . use it whenever you want.

*functon name(parameter){*

*--code--*

*}*

*name(argument);*

**Example code**
```js
function happyBirthday(username, age){ //Function definition 
    console.log('Happy birthday to you!');
    console.log('Happy birthday to you!');
    console.log('Happy birthday dear ${username}!');
    console.log('Happy birthday to you!');
    console.log('You are ${age} years old');
}

happyBirthday('BroCode', 25);//Function call
happyBirthday('Spongebob', 30);
happyBirthday('Patrick', 37);
```
---
**Return**

Returns a value from the function to a variable
```js
function add (x , y){
    let sum = x + y;
    return sum;
}

let ans = add(2,3);
console.log(ans);
```
**OR**
```js
function add(x , y){
    return x + y;
}

let ans = add(2,3);
console.log(ans);
```
<img src="Images/JS/Return.png" alt="Return" width="600"/>



## Variable scope

```javascript
// Global scope
let globalVar = "I am a global variable";

function exampleFunction() {
    // Local scope (Function scope)
    let functionVar = "I am a function-scoped variable";
    console.log(globalVar);  // Accessible, since globalVar is declared globally
    console.log(functionVar); // Accessible within the function

    if (true) {
        // Block scope (let and const are block-scoped)
        let blockVar = "I am a block-scoped variable";
        console.log(blockVar);  // Accessible within the block
    }
    
    // Uncommenting the following line will throw an error
    // console.log(blockVar); // blockVar is not accessible here, outside the block
}

exampleFunction();

console.log(globalVar); // Accessible
// Uncommenting the following line will throw an error
// console.log(functionVar); // functionVar is not accessible outside the function
```
---
- **Global scope**: `globalVar` is accessible anywhere in the code, even inside functions.
- **Function scope**: `functionVar` is only accessible inside the function `exampleFunction`.
- **Block scope**: `blockVar` is scoped to the `if` block and can’t be accessed outside it.

## Project 2 : Temperature converter

**HTML**
```html
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <form>
        <h1>Temperature conversion:</h1>
        <input type="number" id="textBox" value="0"><br>

        <input type="radio" id="toFahrenheit" name="unit">
        <label for="toFahrenheit">Celsius ➡ Fahrenheit</label><br>

        <input type="radio" id="toCelsius" name="unit">
        <label for="toCelsius">Fahrenheit ➡ Celsius</label><br>

        <button type="button" onclick="convert()">submit</button>
        <p id="result"></p>
    </form>
    
    <script src="index.js"></script>
</body>
</html>
```
**JavaScript**

```JS
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}
```
---
## Array
A variable like structure that holds more than 1 value.
```js
let fruits = ["apple", "banana", "orange", "grape", "mango", "pineapple", "kiwi", "strawberry", "peach", "watermelon"];
```

| Function                             | Console Output Example                        | What does it do?                                        |
|--------------------------------------|-----------------------------------------------|---------------------------------------------------------|
| `console.log(fruits.length)`         | `10`                                          | Returns the total number of items in the array         |
| `console.log(fruits[0])`             | `"apple"`                                     | Accesses the first element                             |
| `console.log(fruits.at(-1))`         | `"watermelon"`                                | Accesses the last element                              |
| `fruits.push("papaya")`              | `11`                                          | Adds "papaya" to the end, returns new length           |
| `fruits.pop()`                       | `"papaya"`                                    | Removes the last item and returns it                   |
| `fruits.unshift("lemon")`            | `11`                                          | Adds "lemon" to the start, returns new length          |
| `fruits.shift()`                     | `"lemon"`                                     | Removes the first element and returns it               |
| `console.log(fruits.includes("mango"))` | `true`                                      | Checks if "mango" exists in the array                  |
| `console.log(fruits.indexOf("grape"))` | `3`                                         | Returns the index of "grape"                           |
| `fruits.reverse()`                   | `[...]` (reversed list)                       | Reverses the array in-place                            |
| `fruits.sort()`                      | `[...]` (sorted list)                         | Sorts the array alphabetically                         |
| `fruits.splice(2, 1)`                | `["grape"]`                                   | Removes 1 item at index 2                              |
| `fruits.splice(2, 0, "lychee")`      | `[]`                                          | Inserts "lychee" at index 2                            |
| `console.log(fruits.slice(1, 4))`    | `["banana", "lychee", "mango"]`               | Returns a shallow copy from index 1 to 3               |
| `fruits.map(f => f.toUpperCase())`   | `["APPLE", "BANANA", ...]`                    | Creates a new array by transforming each item          |
| `fruits.filter(f => f.length > 6)`   | `["pineapple", "strawberry", "watermelon"]`   | Returns items where condition is true                  |
| `fruits.find(f => f.startsWith("p"))`| `"pineapple"`                                 | Returns the first match                               |
| `fruits.every(f => f.length > 3)`    | `true`                                        | Checks if **all** items satisfy condition              |
| `fruits.some(f => f.startsWith("z"))`| `false`                                       | Checks if **any** item satisfies condition             |
| `fruits.reduce((acc, f) => acc + ", " + f)` | `"apple, banana, ..."`                     | Combines all elements into a single string             |
| `fruits.forEach((f, i) => ...)`      | Logs each item and index                      | Runs a function on each item (no return)               |
| `fruits.join("-")`                 | `"apple-banana-..."`                      | Joins elements into a single string with separator     |
| `fruits.flatMap(f => [f, f.length])` | `["apple", 5, "banana", 6, ...]`              | Maps and flattens the array one level deep             |
| `let [a,b,...rest]=fruits`           | `a="apple", b="banana"`                       | Destructures array into variables                      |

---
## Foreach loop (Iterates through an array)

```js
let fruits = ["apple", "orange", "banana", "coconut"];

for (let fruit of fruits) {
    console.log(fruit);
}
```
---

## 2D array

```js
let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
            ];

for(let row of matrix){
    console.log(row);
}
// Output
// (3) [1, 2, 3]
// (3) [4, 5, 6]
// (3) [7, 8, 9]
```
```js
let matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
            ];

for(let row of matrix){
    let rowstring = row.join(' ');//Joining the elements with a space and then printing them as a string
    console.log(rowstring);
}
// Output
// 1 2 3
// 4 5 6
// 7 8 9
```
---
**Will be explained further while doing projects.**
---
## Spread operator (...)
... allows an iterable such as an array or string to be expanded in to separate elements (unpacks the elements)

suppose we have to find the max number in an array:
```js
let numbers = [2,4,5,6,7,4,7,10];
let max = Math.max(numbers);

console.log(max); 

//Output : NaN
```
Why didn’t it show the max number?
Because `Math.max()` works with individual numbers, not an entire array or string.

So, we need to unpack the array into separate elements using the `spread operator (...)`.
```js
let numbers = [2,4,5,6,7,4,7,10];
let max = Math.max(...numbers);//used '... (spread operator)'

console.log(max); 

//Output : 10
```
---

Let's unpack multiple arrays and put the elements in one single array
```js
let fruits = ["apple" , "banana" , "mango" , "pear"];
let vegetables = ["brochli" , "tomato" , "carrot"];

let foods = [fruits , vegetables];
console.log(foods);

//Output : (2) [Array(4) , Array(3)]❌
```
We need to unpack them first:

```js
let fruits = ["apple" , "banana" , "mango" , "pear"];
let vegetables = ["brochli" , "tomato" , "carrot"];

let foods = [...fruits , ...vegetables];
console.log(foods);

//Output : (7) ['apple', 'banana', 'mango', 'pear', 'brochli', 'tomato', 'carrot']✅
```
Now, Let's unpack a string and then join the characters with '-'
```js
let name = "Mahmud";
console.log([...name].join("-")); 
//Output : M-a-h-m-u-d
```
## Rest parameters:   
Works inside a function

Allow a function work with a variable , number of arguments bundled into an array

spread = expands an array into seperate elements 

rest =  bundles elementd into an array
---
```js
function openFridge(...food){
    return food;   
}

let food_1 = "Pizza";
let food_2 = "Hamburger";
let food_3 = "Sushi";
let food_4 = "Rice";
let food_5 = "Fish";
let food_6 = "Meat";
let food_7 = "Beef";

let foods = openFridge(food_1 , food_2 , food_3 , food_4 , food_5 , food_6 , food_7);
//All the elements passed as parameters

console.log(foods);
```
**Output**
```js
(7) ['Pizza', 'Hamburger', 'Sushi', 'Rice', 'Fish', 'Meat', 'Beef']
```

> We can use an array for multiple parameters , while calling the function.😜

```js
function function_name(...single_parameter){
    return single_parameter;
}

let element_1 = "Element-1"
let element_2 = "Element-2"
let element_3 = "Element-3"
.
.
.
.
let array = function_name(element_1 , element_2); // The array has 2 elements.
console.log(array); //---> (2) ['Element-1', 'Element-2']

```
**Application**

**Sum**
```js
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

let addition = sum(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 10);
console.log(`Your total is $${addition}`);

//Output : Your total is $46
```
**Average**
```js
function average(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return (result/numbers.length).toFixed(2);
}

let avg = average(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 10);
console.log(`Your average is $${avg}`);

//Output : Your average is $5.11
```
**Combining strings**
```js
function getFullName(...name){
    return name.join(" ");
}

let fullName = getFullName("Abdullah" , "Al" , "Mahmud");
console.log(fullName);

//Output : Abdullah Al Mahmud
```
## Project 3 : Dice roller

**Dice Roller - What It Does**

- Takes user input for how many dice to roll
- Generates a random number between 1 and 6 for each dice roll
- Displays the list of rolled numbers in text form
- Dynamically shows the corresponding dice images based on the rolled values
- Clears the previous results each time a new roll is made to avoid duplication
- Works instantly on button click using JavaScript without refreshing the page

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Dice roller</h1>
        <input type="number" id="diceNumber" placeholder="How many dice do you want to roll ?" min="1">
        <input type="submit" id="submit" onclick="rollDice()">

        <div id="displayText">Values</div>
        <div id="displayImage">Images</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
**JavaScript**
```js
let submit = document.getElementById("submit");
let displayText = document.getElementById("displayText");
let displayImage = document.getElementById("displayImage");

let values = [];
let diceImages = [];

function rollDice(){ // submit button
    let diceNumber = document.getElementById("diceNumber").value;
    for(let i = 0 ; i < diceNumber ; i++){
        value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        diceImages.push(`<img src = "Dice_images/Dice_${value}.png" alt = "dice : ${values}">`);
    }

    console.log(values);
    displayText.textContent = `${values.join(' , ')}`;
    displayImage.innerHTML = `${diceImages.join(' ')}`;
    values.length = 0;  // Refresh the array
    diceImages.length = 0;  // Refresh the array
}
```

## Project 4 : Random password generator

**Password Generator Function - Explanation**

**What it does:**
This JavaScript function generates a random password with a fixed length of 12 characters. It includes uppercase letters, lowercase letters, numbers, and symbols based on predefined character sets.

**Breakdown:**
- `generatePassword(upperCase, lowerCase, numberChars, symbolChars)`:  
  A function that takes four character sets as arguments.

- Inside the function:
  - It enables all character types using `allowUpperCase`, `allowLowerCase`, `allowNumbers`, and `allowSybmols`, all set to `true`.
  - It defines a total password length of `12`.
  - It initializes an empty string `allowedChars` to collect all selected characters.
  - Based on the enabled types, it appends corresponding characters to `allowedChars`.
  - It loops 12 times, and in each iteration:
    - Picks a random character from `allowedChars`.
    - Appends it to the `password` string.
  - Finally, it returns the generated `password`.

**Character Sets Used:**
- `upperCase`: `"ABCDEFGHIJKLMNOPQRSTUVWXYZ"`
- `lowerCase`: All lowercase versions of `upperCase`
- `numberChars`: `"1234567890"`
- `symbolChars`: `"~!@#$%^&*()_+{}|\:;,./?><"`

**How it’s used:**
- The character sets are defined.
- The function is called with all four sets.
- The result is stored in `password` and logged to the console.

**Note:**
There is a typo in the variable name `allowSybmols`, it should be `allowSymbols`.

```js
function generatePassword(upperCase , lowerCase , numberChars , symbolChars){
    const allowUpperCase = true;
    const allowLowerCase = true;
    const allowNumbers = true;
    const allowSybmols = true;
    const passwordLength = 12;
    let password = "";
    let allowedChars = "";

    
    
    if (allowUpperCase) allowedChars += upperCase;
    if (allowLowerCase) allowedChars += lowerCase;
    if (allowNumbers) allowedChars += numberChars;
    if (allowSybmols) allowedChars += symbolChars;
    
    for(let i = 0 ; i < passwordLength ; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numberChars = "1234567890";
const symbolChars = "~!@#$%^&*()_+{}|\:;,./?><";

let password = generatePassword(upperCase , lowerCase , numberChars , symbolChars);
console.log(password)
```
## Callback

A function that is passed as an argument to another function.

```js
function hello(callback){
    console.log("Hello!!!");
    callback()
}

function goodbye(){
    console.log("Goodbye..");
}

hello(goodbye);
```
> Hello!!!
> Goodbye..

Here,
```js
function hello(callback){
    console.log("Hello!!!");
    callback()
}
```
This is the callback function .

The `goodbye()` function is used as parameter in the `hello()` function.

**Let's use it more.**
```js
function hello(callback){
    console.log("Hello!!!");
    callback()
}

function goodbye(){
    console.log("Goodbye..");
}

function hi(){
    console.log("Hi !!!!");
}

function wp(){
    console.log("whut up ??");
}

hello(goodbye); // goodbye() will be ivoked right after hello()
hello(hi); // hi() will be ivoked right after hello()
hello(wp); // wp() will be ivoked right after hello()
```
> Hello!!!
> Goodbye..
> 
> Hello!!!
> Hi !!!!
> 
> Hello!!!
> whut up ??

```js
function hello(callback){
    console.log("Hello!!!");
    callback()
}
```
This is the callback caller.

Every function can be used as a parameter (`callback`) of this function while calling it.

---
```js
function sum(callback , x , y ){
    let result = x + y;
    callback(result);
}

function showResult(result){
    console.log(result);
}

sum(showResult , 5 , 6); // showresult() gets ivoked right after sum.
```
**callback is** Used to handle asynchronus operations.
- Reading a file 
- Network requests
- Interacting with database
**"Hey , when you're done , call this next.", says callback**

---

## foreach() method

Method used to iterate over all the elements of an array and apply a specific function (`callback`) to each element.
```js
array.foreach(callback);
```
**Doubling each element of an array and printin them.**
```js
let numbers = [1 , 5 , 12 , 6 , 8 , 9];

function double(element){
    element *= 2;
    console.log(element);
}

//array.foreach(callback);
numbers.forEach(double);
```
**To upperCase**
```js
let fruits = ["apple" , "orange" , "banana" , "pinapple"];

function upperCase(element , index , array){
    array[index] = element.toUpperCase();
}

fruits.forEach(upperCase);
console.log(fruits);
```

**What's wrong with this ?...this works fine**
```js
function upperCase(element) {
    element = element.toUpperCase();  // Convert to uppercase
    console.log(element);             // Log it
}
```
> APPLE
> ORANGE
> BANANA
> PINAPPLE
> *This ain't an array..😕*

This prints the element as uppercases but the original array still stays the same.

The purpose of forEach was to edit the actuall array.

That's why we have to work with the whole array and the index of each element and pass them as parameters.

```js
function upperCase(element , index , array){
    array[index] = element.toUpperCase();
}

fruits.forEach(upperCase);
console.log(fruits);
```
> (4) ['APPLE', 'ORANGE', 'BANANA', 'PINAPPLE']
**So , this one's better.**

**Capitalise each element**

> apple --> Apple
```js
let fruits = ["apple" , "orange" , "banana" , "pinapple"];

function upperCase(element , index , array){
    array[index] = element.slice(0,1).toUpperCase() + element.slice(1);
}

fruits.forEach(upperCase);
console.log(fruits);
```
> (4) ['Apple', 'Orange', 'Banana', 'Pinapple']
---
## map() Method
Applies a function(callback) to each element of an array and returns a new array.

---

**🔥 `map()` is basically `forEach()` on steroids 💪**

Both go through each element in an array —  
But while `forEach()` just *does stuff and leaves*, 
`map()` does stuff AND gives you a fresh new array like:

> "Here you go king 👑 — the glow-up version."

- `map()` = “copy + upgrade”  
- `forEach()` = “task done, peace out ✌️”

**UpperCase each element of an array using map()**
```js
let fruits = ["apple" , "orange" , "banana" , "pinapple"];

function upperCase(element){
    return element.toUpperCase(); // Return the output...
}

let newArray = fruits.map(upperCase); // ...to a new array
console.log(newArray);
```
> (4) ['APPLE', 'ORANGE', 'BANANA', 'PINAPPLE']
---
## filter() methods
```js
array.filter(callback);
```
Creates a new array by filtering out elements.

```js
filteredArray.length != originalArray.
```

**Filtering out the even numbers from an array.**
```js
let nums = [1 , 10 , 20 , 25 , 40 , 35 , 24 , 2];

function even(element){
    return element % 2 === 0;
}

let evenNums = nums.filter(even);
console.log(evenNums);
```
> (5) [10, 20, 40, 24, 2]

**Find the adults**
```js
const ages = [10 , 12 , 14 , 16 , 18 , 20 , 22 , 24 , 25];

function findAdults(element){
    return element > 17;
}

let adults = ages.filter(findAdults);
console.log(adults);
```
> (5) [18, 20, 22, 24, 25]

## reduce() method
```js
array.reduce(callback);
```

Reduces the array in a single value.

**Sum of the elements of an array**
```js
const array = [1,2,3,4,5,6,7,8,9,10];

function sum(previousElement , nextElement){
    return previousElement + nextElement;
}

let SUM = array.reduce(sum);
console.log(SUM);
```
**Didn't understand this part.**
```js
function sum(previousElement , nextElement){
    return previousElement + nextElement;
}
```
`How does the previousElement , nextElement parameters iterate ??`
**Step by step execution**
```js
array = [1,2,3,4,5,6,7,8,9,10];
```
<pre>          
         sum(1, 2)
             ↓
             3 (Now this is the prev)
             ↓
         sum(3, 3) --> (prev , next) 
             ↓
             6
             ↓
         sum(6, 4)
             ↓
             10
             ↓
         sum(10, 5)
             ↓
         15 (Final Result)
</pre>
## Function expressions
A way to define functions as valus or variables

**Function declaration vs Function expression**

**Function declaration**
```js
function hello(){
    console.log("Hello");
}
```
**Function expression**
```js
const hello = function(){
    console.log("Hello");
}
```
## setTimeOutz()

```js
setTimeOut(callback , `time in milliseconds`);
```
```js
const hello = function(){
    console.log("hello");
}
setTimeout(hello,4000);
```
> Hello             (printed after 4s / 4000 ms)

*Or , we can pass an intire function expression as an argument*
```js
setTimeout(
    function(){
        console.log("Hello world !");
    } , 4000
);
```
> Hello world !             (printed after 4s / 4000 ms)
```js
// Applied on map()
const numbers = [1,23,4,5,6,78,9];
const square = numbers.map(function(element){ // Intire function expression in map as a callback
    return Math.pow(element,2);
})

console.log(square);
```
> (7) [1, 529, 16, 25, 36, 6084, 81]

## Arrow function

A concise way to learn function expressions. Good for simple functions we use once only.
```js
(parameters) => code;
```
```js
cconst hello = (name , age) => {
    console.log(`Hello ${name} , you are ${age} years old`);
}
hello("Mahmud" , 21);
```
> Hello Mahmud , you are 21 years old

**Use it in setTimeOut()**
```js
setTimeout(
    () => {
    console.log(`Hello`)
},4000);
```
> Hello             (Printed after 4s)
---
**Using it on map , filter and reduce**
```js
const numbers = [1,2,3,4,5,6,7,8,9,10];

// map 
const double = numbers.map(
    (element) => {
        return 2*element;
    }
);

// filter
const evenNums = numbers.filter(
    (element) => {
        return element % 2 === 0;
    }
);

// reduce
const sum = numbers.reduce(
    (accumulator , current) => {
        return accumulator + current;
    }
);

console.log(double);
console.log(evenNums);
console.log(sum);
```
> (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
> (5) [2, 4, 6, 8, 10]
> 55

## Object
A collection of related properties or methods.
```js
object = {
    key: value;
    function();
}
```
**Method :** The function called in an object.
```js
object = {
    key: value;
    function(); // This is a method.
}
```
**Example**
```js
const person_1 = {
    name: "Spongebob",
    age: 21,
    hello: () => {
        console.log(`Hi I am Spongebob`);
    }
};

person_1.hello();
```

## this:
Reference to the object where `this` is used.
(It depends on the immediate context.
person_1.name = this.name)
**Application**
```js
const person_1 = {
    name: "Spongebob",
    age: 21,
    hello: () => {
        console.log(`Hi I am ${this.name}`);
    }
};

person_1.hello();
```
> Hi I am 

Where's the name 😕 ?

**`This` does not work for arrow function**
**Use a regular function instead**
```js
const person_1 = {
    name: "Spongebob",
    age: 21,
    hello: function(){
        console.log(`My name is ${this.name}`)
    }
};

const person_2 = {
    name: "Squidward",
    age: 32,
    hello: function(){
        console.log(`My name is ${this.name}`)
    }
};

person_1.hello();
person_2.hello();
```
> My name is Spongebob
> My name is Squidward
## Constructor
Special methods of defining the properties and methods of an object.
```js
function car(make , name , year , color , callback){ // Constructor
    this.make = make,
    this.name = name,
    this.year = year,
    this.color = color

    callback.call(this); // "Yo callback, I want you to run as if you are this object (this). Use my properties like they're your own."
    // So , it's gonna use the properties as it's own parameters.

const display = function(){
    console.log(`Make : ${this.make}`);
    console.log(`Name : ${this.name}`);
    console.log(`Year : ${this.year}`);
    console.log(`Color : ${this.color}`);
}
const car_1 = new car("Ford" , "Mustang" , "2022" , "Blue" , display);
const car_2 = new car("Toyota" , "Supra" , "2024" , "zet black" , display);
```
**This is the main part (Constructor) ⤵️**
```js
function car(make , name , year , color , callback){ // Constructor
    this.make = make,
    this.name = name,
    this.year = year,
    this.color = color
}
```
> Make : Ford
> Name : Mustang
> Year : 2022
> Color : Blue 

> Make : Toyota
> Name : Supra
> Year : 2024
> Color : zet black

Applied callback concept in it.

What if I didn't have to call a callback every time I make an object.
**Proceed to classes ⤵️**

## Class
(ES6 feature) Provides a more structured and clearer way to work with objects compared to traditional constructor functions.
```js
class car {
    constructor(name , price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`The price of the ${this.name} is $${this.price}`);
    }
}

const car_1 = new car("Mustang" , 25000);
const car_2 = new car("Cavero" , 35000);
const car_3 = new car("Supra" , 45000);

car_1.display();
car_2.display();
car_3.display();
```
> The price of the Mustang is $25000
> The price of the Cavero is $35000
> The price of the Supra is $45000

**Let's add sales tax**
```js
class car {
    constructor(name , price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`The price of the ${this.name} is $${this.addTax()} (Including sales tax))`);
    }// Called addTax(); function here , Which will edit the price by adding 5% sales tax to it.

    addTax(){
        return this.price + this.price*0.05;
    }
}

const car_1 = new car("Mustang" , 25000);
const car_2 = new car("Cavero" , 35000);
const car_3 = new car("Supra" , 45000);

car_1.display();
car_2.display();
car_3.display();
```
> The price of the Mustang is $26250 (Including sales tax)
> The price of the Cavero is $36750 (Including sales tax)
> The price of the Supra is $47250 (Including sales tax)

## Static keyword 
Keyword that defines properties or methods that belong to a class itself rather than the objects created from that class ( Class own anything static , not the objects )

Suppose I've made a class. And accessed it like this
```js
class car{
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
}

const car_1 = new car("Mustang" , 25000);
console.log(car_1.name);
```
I can define the name in the class and access it immediatly with the `static` keyword
```js
class car{
    static name = "Mustang";
}
console.log(car.name);
```
> Mustang

**EASY 😎**

**Now add tax to the price**
```js
class car{
    static name = "Mustang";
    static price = 25000;

    static addTax(price){
        return price + price*0.05;
    }
}
console.log(car.name);
console.log(car.addTax(car.price));
```
> Mustang
> 26250

**Mini project : Enter usernames and count the users using `static` keyword**
```js
class user{
    static userCount = 0;

    constructor(username){
        this.username = username;
        user.userCount++;
    }

    displayUser(){
        console.log(`Hi ! Iam ${this.username}`);
    }

    static displayUserCount(){
        console.log(`There are ${user.userCount} users online`);
    }
}

const user_1 = new user("Spongebob");     
const user_2 = new user("Patrick");     
const user_3 = new user("Sandy");     

user_1.displayUser();
user_2.displayUser();
user_3.displayUser();

user.displayUserCount();
```
> Hi ! Iam Spongebob
> Hi ! Iam Patrick
> Hi ! Iam Sandy
> There are 3 users online

## Inheritance

Inheritance allows a new class to inherit properties and methods from an existing class (Parent → Child).

- It helps with **code reusability**, so you don’t have to repeat yourself.

```js
// Parent class
class Animal {
    isAlive = true;

    eat() {
        console.log(`This ${this.name} is eating.`);
    }

    sleep() {
        console.log(`This ${this.name} is sleeping.`);
    }
}

// Child classes
class Rabbit extends Animal { // Rabbit is a child class of Animal
    name = "rabbit";
}

class Hawk extends Animal { // Hawk is a child class of Animal
    name = "hawk";
}

const rabbit = new Rabbit();
const hawk = new Hawk();

rabbit.sleep();
hawk.sleep();
```

> Output:
> This rabbit is sleeping.
> This hawk is sleeping.

Even though the `sleep()` and `eat()` methods belong to the `Animal` class, we can still call them from `rabbit` and `hawk` objects.
That’s because `Rabbit` and `Hawk` *inherit* from `Animal` — they're child classes and get access to all its properties and methods.

**Each child class can have their own properties or methods too.**
```js
//Parent class
class animal{
    isAlive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

//Child class
class Rabbit extends animal{ // Rabbit is a child class of animal
    name = "rabbit";
    run(){
        console.log(`The ${this.name} is running`);
    }
}

class Hawk extends animal{ // Hawk is a child class of animal
    name = "hawk";
    fly(){
        console.log(`The ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const hawk = new Hawk();

rabbit.run(); // The rabbit is running
hawk.fly(); // The hawk is flying
hawk.run(); // Error (A child can't access a method from another child)
```
## Super keyword
Keyword used in classes to call the constructor or to access the properties and methods of a parent (AKA `superclass`) 
- this = this object
- super = the parent
```js
class Animal {
    isAlive = true;
}

class Rabit extends Animal {
    constructor(name , age , runSpeed){
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name , age , swimSpeed){
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name , age , flySpeed){
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabit = new Rabit("Bugs" , 1 , 25);
```
> Error messege : Must call super constructor in derived class before accessing 'this' or returning from derived constructor

* `super()` calls the constructor of the parent class.
* It's **mandatory** in a child class constructor **before** using `this`.
* It sets up the parent part (`Animal`) of the object properly.
* Without it, JavaScript doesn’t know how to initialize `this`, so it throws an error.
* Think of it like setting up the base model before adding custom features.
* Once `super()` runs, you can safely assign things like `this.name`, `this.age`, etc.

```js
class Animal {
    isAlive = true;
}

class Rabit extends Animal {
    constructor(name , age , runSpeed){
        super(); // Called super
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name , age , swimSpeed){
        super(); // Called super
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name , age , flySpeed){
        super(); // Called super
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabit = new Rabit("Bugs bunny" , 1 , 25);
console.log(`${rabit.name} is ${rabit.age} years old , his running speed is ${rabit.runSpeed} mph.`)
```
> Bugs bunny is 1 years old , his running speed is 25 mph.

 Since `name` and `age` are common properties, we can move them to the parent class's constructor. However, we'll still need to pass them from the child class using `super(name, age)` in the constructor.

```js
class Animal {
    isAlive = true;
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
}

class Rabit extends Animal {
    constructor(name , age , runSpeed){
        super(name , age); // we'll still need to pass them from the child class using `super(name, age)` in the constructor.
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name , age , swimSpeed){
        super(name , age); 
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor(name , age , flySpeed){
        super(name , age); 
        this.flySpeed = flySpeed;
    }
}

const rabit = new Rabit("Bugs Bunny", 1, 25);
console.log(`${rabit.name} is ${rabit.age} years old, his running speed is ${rabit.runSpeed} mph.`);

const fish = new Fish("Nemo", 2, 10);
console.log(`${fish.name} is ${fish.age} years old, his swimming speed is ${fish.swimSpeed} mph.`);

const hawk = new Hawk("Sky Hunter", 3, 60);
console.log(`${hawk.name} is ${hawk.age} years old, his flying speed is ${hawk.flySpeed} mph.`);

```
> 'Bugs Bunny is 1 years old, his running speed is 25 mph.'
'Nemo is 2 years old, his swimming speed is 10 mph.'
'Sky Hunter is 3 years old, his flying speed is 60 mph.'

Now , let's define a method in parnet class and call it through child class

```js
class Animal {
    isAlive = true;
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    move(speed){ // Define
        console.log(`${this.name} can move at the speed of ${speed} mph`);
    }
}


class Rabit extends Animal {
    constructor(name , age , runSpeed){
        super(name , age);
        this.runSpeed = runSpeed;
        super.move(this.runSpeed); // Call
    }

}

class Fish extends Animal {
    constructor(name , age , swimSpeed){
        super(name , age); 
        this.swimSpeed = swimSpeed;
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {
    constructor(name , age , flySpeed){
        super(name , age); 
        this.flySpeed = flySpeed;
        super.move(this.flySpeed);
    }
}

const rabit = new Rabit("Bugs Bunny", 1, 25);
const fish = new Fish("Nemo", 2, 10);
const hawk = new Hawk("Sky Hunter", 3, 60);
```
> 'Bugs Bunny can move at the speed of 25 mph'
> 'Nemo can move at the speed of 10 mph'
> 'Sky Hunter can move at the speed of 60 mph'

## Getters and setters (*doesn't make sense ... yet*)

**Getter :** Special method that makes a property readable; 
**Setter :** Special method that makes a property writable; 

Validate and modify a value when reading/writing a property.

```js
class rectangle{
    constructor(width , height){
        this.width = width;
        this.height = height;
    }
}

const rectangle_1 = new rectangle(-111 , "Apple");

console.log(rectangle_1.width);
console.log(rectangle_1.height);
```
> -111
'Apple'

Which doesn't make any sense ... let's fix it by using setters and getters.

```js
class rectangle{
    constructor(height , width){
        this.height = height;
        this.width = width;

    }
    getArea(){
       return this.height * this.width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // _width , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The width should be positive`);
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; // _height , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The height should be positive`);
        }
    }
}

const rectangle_1 = new rectangle(200 , 25);
console.log(`Height = ${rectangle_1.height}`);
console.log(`width = ${rectangle_1.width}`);

```
**Output**
<pre>
'Height = undefined'
'width = undefined'
</pre>

Now it's not showing anything. **This is where getter comes in.😎**

```js
class rectangle{
    constructor(height , width){
        this.height = height;
        this.width = width;

    }
    getArea(){
       return this.height * this.width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // _width , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The width should be positive`);
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; // _height , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The height should be positive`);
        }
    }


    // Getters
    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}

const rectangle_1 = new rectangle(200 , 25);
console.log(`Height = ${rectangle_1.height}`);
console.log(`width = ${rectangle_1.width}`);
```
<pre>
'Height = 200'
'width = 25'
</pre>

We can also get a property that doesn't exist.
Let's get `area`.

```js
class rectangle{
    constructor(height , width){
        this.height = height;
        this.width = width;

    }
    getArea(){
       return this.height * this.width;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // _width , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The width should be positive`);
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; // _height , here _ represents a private property , When you give your code to other devs , it tells them to not to mess with it.
        }
        else{
            console.error(`The height should be positive`);
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._height * this._width;
    }
}

const rectangle_1 = new rectangle(200 , 25);
console.log(`Height = ${rectangle_1.height}`);
console.log(`width = ${rectangle_1.width}`);
console.log(`Area = ${rectangle_1.area}`);
```
<pre>
'Height = 200'
'width = 25'
'Area = 5000'
</pre>

```js
class person{
    constructor(firsName , lastName , age){
        this.firsName = firsName;
        this.lastName = lastName;
        this.age = age;
    }
// Setters
    set firsName(newFirstName){
        if(typeof(newFirstName) === 'string' && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error(`Name should be a string.`)
        }
    }

    set lastName(newLastName){
        if(typeof(newLastName) === 'string' && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error(`Name should be a string.`);
        }
    }

    set age(newAge){
        if(typeof(newAge) === 'number'){
            this._age = newAge;
        }
        else{
            console.error(`Age should be a number`);
        }
    }
// Getters
    get fullName(){
        return `${this._firstName} ${this._lastName}` 
    }
    
    get age(){
        return this._age;
    }
}

const person1 = new person("Abdullah","Al Mahmud",21);

console.log(`Name = ${person1.fullName}`);
console.log(`Age = ${person1.age}`);
```
<pre>
'Name = Abdullah Al Mahmud'
'Age = 21'
</pre>
---
**Why Use Getters & Setters:**

* 🔒 **Control access** to properties (no wild data allowed)
* ✅ **Validate** values before setting (e.g. age must be a number)
* 🧼 **Cleaner syntax** for accessing computed data (`user.fullName` instead of `user.getFullName()`)
* 🚫 **Prevent direct modification** of sensitive/internal data (`_balance`, `_password`, etc.)
* 🔁 **Auto-update related stuff** when one value changes
* 🪄 **Hide internal logic** while keeping API simple (`obj.prop` feels like a regular variable)
* ♻️ **Maintain flexibility** — you can switch from a static value to a dynamic one without breaking outside code
* 📦 **Encapsulation** — class manages its own state like a grown adult

## Destructuring
Extract values from arrays and objects . Then assign them in a variable in a convinient way.

- [] is used to perform **array** destructuring
- {} is used to perform **object** destructuring


**Examples**

**1. Swap values**
```js
let a = 5;
let b = 4;

console.log(`Before swap > a = ${a} and b = ${b}`);

[a , b] = [b , a];

console.log(`Before swap > a = ${a} and b = ${b}`);
```
<pre>
'Before swap > a = 5 and b = 4'
'Before swap > a = 4 and b = 5'
</pre>

**2. Swap elements of an array**
```js
let colors = ["Red" , "Green" , "Blue" , "Yellow"];
console.log(`Before swap : ${colors}`);

[colors[0] , colors[2]] = [colors[2] , colors[0]];
 // Swaps red and blue
console.log(`After swap : ${colors}`);
```
<pre>
'Before swap : Red,Green,Blue,Yellow'
'After swap : Blue,Green,Red,Yellow'
</pre>

**3. Assigning array elements to a variable**
```js
let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White"];
 
[firstColor , secondColor , thirdColor , ...ExtraColors] = colors;
// You can use rest parameters to assign them in an array

console.log(thirdColor);
console.log(firstColor);
console.log(secondColor);
console.log(ExtraColors);
```
<pre>
'Blue'
'Red'
'Green'
Array(7) [ 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', ... ]
</pre>

**4. Extract values from object**
```js
const car_1 = {
    brand : "Toyota",
    name : "Mazda",
    price : 25000,
}
const car_2 = {
    brand: "Honda",
    name: "Civic",
    price: 22000,
}

const car_3 = {
    brand: "Ford",
    name: "Mustang",
    price: 35000,
}

const {brand , name , price} = car_1;
console.log(brand)
console.log(name)
console.log(price)
```
<pre>
'Toyota'
'Mazda'
25000
</pre>

We can assign custom values iff it's not provided
```js
const car_1 = {
    brand : "Toyota",
    name : "Mazda",
    price : 25000,
}
const car_2 = {
    brand: "Honda",
    name: "Civic",
    price: 22000,
}

const car_3 = {
    brand: "Ford",
    name: "Mustang", // Price missing
}

const {brand , name , price = 30000} = car_3; // Assigned price
console.log(brand)
console.log(name)
console.log(price)
```
<pre>
'Ford'
'Mustang'
30000
</pre>

**5. Destructure in function parameters**
```js
const car_1 = {
    brand : "Toyota",
    name : "Mazda",
    price : 25000,
}
const car_2 = {
    brand: "Pegani",
    name: "Zonda-7",
    price: 80000,
}

function displayCar({brand , name , price}){
    console.log(`Name : ${name}`);
    console.log(`Brand : ${brand}`);
    console.log(`Price : ${price}`);
}

displayCar(car_1); // Call
```
<pre>
'Name : Mazda'
'Brand : Toyota'
'Price : 25000'
</pre>
```js
displayCar(car_2); // Call
```
<pre>
'Name : Zonda-7'
'Brand : Pegani'
'Price : 80000'
</pre>

## Nested object
Objects inside an object.
```js
const car = {
    Name : "Pagani zonda cinque",
    body : {
        color : "White",
        material : "Carbotitanium",
        door : "Swan",
        frame : "Tubular",
    }
}

console.log(`Name : ${car.Name}`);
console.table(`Name : ${car.body}`);
console.table(`Color : ${car.body.color}`);
 
```
**Output**
'Name : Pagani zonda cinque'
| **Index** | **Values**       |
|-----------|------------------|
| color     | White            |
| material  | Carbotitanium    |
| door      | Swan             |
| frame     | Tubular          |

'Color : White'
---

You can loop through the properties of a **nested object**
```js
const car = {
    Name : "Pagani zonda cinque",
    body : {
        color : "White",
        material : "Carbotitanium",
        door : "Swan",
        frame : "Tubular",
    }
}

for(property in car.body){
    console.log(car.body[property]);
}
```
<pre>
'White'
'Carbotitanium'
'Swan'
'Tubular'
</pre>

## Arrays of objects
```js
const fruits = [{name: "Apple" , color: "Red" , calorie: 95},
                {name: "Mango" , color: "Mango" , calorie: 100},
                {name: "Banana" , color: "White" , calorie: 105},
]

console.log(fruits[0].name);
```
> 'Apple'

**forEach()**
```js
const fruits = [{name: "Apple" , color: "Red" , calorie: 95},
                {name: "Mango" , color: "Mango" , calorie: 100},
                {name: "Banana" , color: "White" , calorie: 105},
]

fruits.forEach(fruit => console.log(fruit));
```
<pre>
{ name: 'Apple', color: 'Red', calorie: 95 }
{ name: 'Mango', color: 'Mango', calorie: 100 }
{ name: 'Banana', color: 'White', calorie: 105 }
</pre>

**map()**
```js
const fruits = [{name: "Apple" , color: "Red" , calorie: 95},
                {name: "Mango" , color: "Mango" , calorie: 100},
                {name: "Banana" , color: "White" , calorie: 105},
]

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
```
<pre>
[ 'Apple', 'Mango', 'Banana' ]
</pre>

**filter() method**
```js
const fruits = [{name: "Apple" , color: "Red" , calorie: 95},
    {name: "Mango" , color: "Yellow" , calorie: 100},
    {name: "Banana" , color: "Yellow" , calorie: 105},
    {name: "Orange" , color: "Orange" , calorie: 60},
]

let yellowFruits = fruits.filter(fruit => fruit.color == "Yellow"); // Used filter() here

yellowFruits = yellowFruits.map(fruit => fruit.name);
console.log(yellowFruits);
```
> [ 'Mango', 'Banana' ]

**reduce() method**
```js
const fruits = [{name: "Apple" , color: "Red" , calorie: 95},
    {name: "Mango" , color: "Yellow" , calorie: 100},
    {name: "Banana" , color: "Yellow" , calorie: 105},
    {name: "Orange" , color: "Orange" , calorie: 60},
]

let maxCalFruit = fruits.reduce((max , fruit) => fruit.calorie > max.calorie ? fruit : max);
console.log(maxCalFruit)
```
> { name: 'Banana', color: 'Yellow', **calorie: 105** }

## Sorting array using sort() method
- Method used to sort the elements of an array in place.
- Sorts elements as **strings in lexicographical order**
- **Lexicographic:** When you mix a string, a number, and a symbol, the whole thing still counts as a string. Lexicographically, everything gets treated like characters, not values. So "a" + 5 + "@" becomes "a5@", and it’s all just one big string of text, not math.
```js
const numbers = [1,4,3,2,5,7,6,9,8,10];
console.log(numbers.sort());
```
> [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

**Why is it sorted like this ? 😕**

It’s treating the numbers like strings, not actual numbers.

10 comes before 2 because as strings, "10" comes before "2"
(Since "1" is less than "2" in string comparison)

**Sorting in numerical order**
```js
const numbers = [1,4,3,2,5,7,6,9,8,10];
numbers.sort((a , b) => a - b);
console.log(numbers);
```
> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
**Reverse**
```js
const numbers = [1,4,3,2,5,7,6,9,8,10];
numbers.sort((a , b) => b - a);
console.log(numbers);
```
> [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

**How does it work ?**
The sort() method uses what we call a "comparison function", and the math you write inside controls who gets in line first.

**📥 How a - b works (ascending):**
- If the result is negative → a comes before b
- If it’s positive → b comes before a
- If it’s 0 → they’re equal, order stays

## Shuffling array
```js
const numbers = [1,4,3,2,5,7,6,9,8,10];
console.log(numbers.sort(() => Math.random() - 0.5));

```
> [ 9, 5, 7, 8, 2, 6, 3, 4, 10, 1 ]


It’s basically this logic running in the background:

```js
for each (a, b) pair in the array:
    if (Math.random() - 0.5 > 0) {
        place a after b;
    } else {
        place a before b;
    }
```

But it's not doing **every** possible pair. Just enough to think it sorted it.

---

**💣 So Why It Works (kinda)?**

Because it does **just enough randomness** to mess up the order.
But if you're doing:

* Card shuffling?
* Fair random picking?
* Generating permutations?

👉 Use **Fisher–Yates**, the king of shuffles.

**Fisher-yates algorithm**
- Using a dedicated function.
- It swaps the current element with a random element.
```js
const numbers = [1,4,3,2,5,7,6,9,8,10];

shuffle(numbers);
console.log(numbers);


// Function definition
function shuffle(array){
    for(let i = array.length - 1 ; i > 0 ; i--){
        let random = Math.floor(Math.random() * (i+1));

        [array[i] , array[random]] = [array[random] , array[i]];
    }
}
```
> [ 10, 3, 4, 6, 5, 1, 9, 2, 8, 7 ]

## Date objects
```js
const date = new Date(); // Object instance
console.log(date);
```
> new Date('2025-05-14T10:05:34.000Z')
---
**Printing other stuff of Date , like month , day , year , time** 
```js
cconst date = new Date(); // Object instance
console.log(`Date : ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`);
// Month + 1 .. why ? --> month works like a array ( 0 - 11 )
console.log(`Time : ${date.getHours()} : ${date.getMinutes()}`);
```
> 'Date : 14 / 5 / 2025'
> 'Time : 16 : 15'

**Custom date and time**
```js
// Date(year , month , date , hour , second)
const date = new Date(2026 , 11 , 11 , 3 , 35); // Object instance
console.log(`Date : ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`);
// Month + 1 .. why ? --> month works like a array ( 0 - 11 )
console.log(`Time : ${date.getHours()} : ${date.getMinutes()}`);
```
> 'Date : 11 / 12 / 2026'
> 'Time : 3 : 35'

Or do it like this 
```js

const date = new Date(); // Object instance

date.setDate(12);
date.setMonth(1);
date.setFullYear(2012);
date.setHours(12);
date.setMinutes(25);

console.log(`Date : ${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`);
// Month + 1 .. why ? --> month works like a array ( 0 - 11 )
console.log(`Time : ${date.getHours()} : ${date.getMinutes()}`);
```
> 'Date : 12 / 2 / 2012'
> 'Time : 12 : 25'

## Closure

- A **closure** happens when you define a function **inside another function**.
- The **inner function can access** variables from the **outer function**, even after the outer is done running.
- It helps you create **private variables** — like stuff that can’t be accessed from outside.
- Super useful for **keeping state** and is used a lot in frameworks like **React, Vue, and Angular**.

```js
function outer(){
    let messege = "Hello world."
    function inner(){
        console.log(messege);
        
    }
}

outer();
```
> `No output` 😶

A closure in JavaScript is created when a function is defined inside another function, allowing the inner function to access variables from the outer function’s scope. Even after the outer function finishes executing, the inner function retains access to those variables. However, just defining a closure doesn’t do anything unless the inner function is actually called. In the given code, although the closure is properly formed by defining `inner()` inside `outer()`, it never runs because `inner()` is not invoked. That’s why there’s no output — the inner function exists, but it was never told to execute.

```js
function outer(){
    let messege = "Hello world."
    function inner(){
        console.log(messege);
        
    }
    inner(); // Fixed here.
} 

outer();
```
> 'Hello world.'

**Example - 2**
```js
function increase(){
    let count = 1;
    count++;
    console.log(count);
}

increase();
increase();
increase();
increase();
increase();
increase();
increase();
```
> 2
2
2
2
2
2
2

Every single time I call it , it stays the same. Because when we call it , the function reassigns the count value to 1.
```js
// This is the outer function — it creates a private variable called 'count'
function container() {
    let count = 1; // 'count' is private, only accessible inside 'container'

    // This inner function is a closure — it remembers 'count' from the outer scope
    function increase() {
        count++; // increase the value of 'count' by 1
        console.log(count); // show the updated value
    }

    // We're returning an object with the 'increase' function,
    // so we can use it outside while still keeping 'count' private
    return { increase };
}

// Calling 'container()' runs the outer function once and returns the object with 'increase'
const counter = container(); 
// Now 'counter.increase' is the inner function — and it still has access to 'count'

// These are the closure magic moments 🪄
// Every time we call counter.increase(), it updates the same 'count'
counter.increase(); // 2
counter.increase(); // 3
counter.increase(); // 4
counter.increase(); // 5
counter.increase(); // 6
counter.increase(); // 7
counter.increase(); // 8
counter.increase(); // 9
counter.increase(); // 10
counter.increase(); // 11
counter.increase(); // 12
counter.increase(); // 13
```
> 2
3
4
5
6
7
8
9
10
11
12
13

Let's try accessing a private variable.`count`
```js

function container(){
    let count = 1; 
    function increase(){
    count++;
    console.log(count);
}    
return {increase}
}

const counter = container();
console.log(counter.count); // Trying to access
```
> Undefined (You can't access a private variable)

**Here'a how you access it.**

You define a function that gets the private variable.
```js

function container(){
    let count = 1; 
    function increase(){
    count++;
    console.log(count);
}    

function getCount(){
    console.log(count);
}

return {increase}
}

const counter = container();
counter.getCount();
```
> counter.getCount is not a function (ERROR).

**Fix**
```js

function container(){
    let count = 1; 
    function increase(){
    count++;
    console.log(count);
}    

function getCount(){
    console.log(count);
}

return {increase , getCount} // You gotta return the functions
}

const counter = container();
counter.getCount();
```
> 1

**Mini project**
```js
function createGame(){
    let score = 0;

    function inceaseScore(inc){
        score+=inc;
        console.log(`+ ${inc} pts`);
    }

    function decreaseScore(dec){
        score-= dec;
        console.log(`- ${dec} pts`);
    }

    function getScore(){
        console.log(`Score = ${score}`);
    }

    return {inceaseScore , decreaseScore , getScore};
}

const myGame = createGame();

myGame.inceaseScore(5);
myGame.inceaseScore(5);
myGame.decreaseScore(5);
myGame.inceaseScore(5);
myGame.getScore();
```

> '+ 5 pts'
> '+ 5 pts'
> '- 5 pts'
> '+ 5 pts'
> 'Score = 10'

**Another example**
```js
function showAccount(Name) {
    console.log(`Name = ${Name}`);

    let balance = 0;
    function showBalance(){
        console.log(`There is $${balance} in ${Name}'s account.`);
    }

    function diposit(money){
        balance += money;
    }

    return {showBalance , diposit};
}

const myAccount = showAccount("Mahmud");
myAccount.diposit(5);
myAccount.diposit(5);
myAccount.diposit(5);
myAccount.diposit(5);

myAccount.showBalance();
```
<pre>
'Name = Mahmud'
'There is $20 in Mahmud`s account.'
</pre>

## setTimeOut()

Function in javascript that allows you to schedule the execution of a function after an amount of time ( in miliseconds ) 

> Times are approximate , It varies based on the workload of the js runtime environment.

**Basic structure**
```js
setTimeOut(callback , delay);
``` 
**Print `Hello world !` after 3 seconds**

**Method - 1**
```js
setTimeout(sayHello , 3000);

function sayHello(){
    console.log(`Hello world !`);
}
```
**Method - 2**
```js
setTimeout(function(){
    console.log(`Hello world !`)
}, 3000);
```
**Method - 3**
```js
setTimeout(() => {
    console.log(`Hello world !`)
}, 3000);
```
<pre>
Hello world !    ( Printed after 3 seconds )
</pre>

**ClearTimeout()**

Can cancel a timeout before it triggers.
```js
clearTimeout(timeout_ID);
```
```js
const timeoutID = setTimeout(() => {
    console.log(`Hello world !`)
}, 3000);


clearTimeout(timeoutID);
``` 
> Nothing printed... Cancelled before execution.

**Mini task**
- Create two buttons (Start , Clear)
- Start : Starts a timeout function
- Clear : Cancels before execution

**HTML**
```html
<button onclick="start()">Start</button>
<button onclick="clear()">Clear</button>
```

**JavaScript**
```js
let timeoutID;

function start(){
    timeoutID = setTimeout(() => window.alert(`Hello`),5000);
    console.log(`Started`);
    
}

function clear(){
    clearTimeout(timeoutID);
    console.log(`Cancelled`);
}
```

**What does it do ?**
* Shows two buttons: "Start" and "Clear"
* Clicking "Start" sets a 5-second timer
* After 5 seconds, it shows an alert saying "Hello"
* The timer ID is stored in a variable
* Clicking "Clear" cancels the timer before it finishes
* If cleared in time, the alert will not show
* Logs "Started" to console when Start is clicked
* Logs "Cancelled" to console when Clear is clicked

## console.time()

Tool that allows you to measure the time it takes for a section of code or process to execute.

Great for identifying performance "bottlenecks"

**Basic format**
```js
console.time("label");
console.timeEnd("label");
```
**Application**
```js
console.time("test");

for(let i = 0 ; i < 100000 ; i++){
    // code
}

console.timeEnd("test");
```
> test: 10.162ms  (This shit took approximately 10 miliseconds)

This code shows the execution time from `console.time() to console.timeEnd()` section..

## Formating currency 

**.toLocaleString()** - Returns a string with a language sensitive representation of a number.

```js
number.toLocaleString("locale" , {opject});
```

**US english format**
```js
let number = 12345.675;
number = number.toLocaleString("en-US");

console.log(number);
```


In this context:

```js
let number = 12345.675;
number = number.toLocaleString("en-US");
```
> 123,45.675

`"en-US"` tells JavaScript to format the number using **U.S. English conventions**.

So it will:

* Use **commas** for thousands → `12,345.675`
* Use **periods** for decimals (instead of commas, like in many European formats)
* Follow **U.S. style** number grouping and punctuation

Basically, `"en-US"` makes sure the output looks like a regular number in American formatting.

**Indian**
```js
let number = 192345.675;
number = number.toLocaleString("hi-IN");

console.log(number);
```
> '1,92,345.675'

**Currency formating (USD)**
```js
let number = 192345.675;
number = number.toLocaleString("en-US" , {style:"currency", currency: "USD"});

console.log(number);
``` 

> $192,345.68

**Currency formating (INR - indian)**
```js
let number = 192345.675;
number = number.toLocaleString("en-US" , {style:"currency", currency: "INR"});

console.log(number);
```

> '₹192,345.68'

## Project 5 : Compound interest calculator

1. Takes user input for **principal amount**, **interest rate**, and **number of years**.
2. Converts the **interest rate** from percentage to decimal.
3. Uses the **compound interest formula**:
   $A = P \times (1 + r)^t
4. Calculates the **future value** based on the input.
5. Formats the result as **Bangladeshi Taka** using currency formatting.
6. Displays the formatted result in the `<p id="total">` element.
7. Applies basic styling with CSS for a clean UI.
8. Adds a green submit button that changes color on hover.
9. Shows result instantly when the "Submit" button is clicked.
10. Keeps everything responsive and centered inside a styled box.


**Formula : A = P(1 + r)^t**

![Compound interst calculator screenshot](Images/JS/Comp_interest_calculator.png);

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Compound interest calculator</h1>
    <div class="container">

        <label for="principal">Principal ammount</label>
        <input id="principal" type="number">

        <label for="rate">Interest rate</label>
        <input id="rate" type="text">
        
        <label for="year">Year</label>
        <input id="year" type="text">

        <p id="total">0.00</p>

        <button id="submit" type="button" onclick="calculate()">Submit</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**CSS**
```css
body{
    background-color: gainsboro;
    font-family: Arial, Helvetica, sans-serif;
}
h1{
    text-align: center;
    font-weight: bolder;
}

.container{
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: white;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bolder;
    border-radius: 10px;
    box-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.389);
}

input{
    margin-top: 10px;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    font-size: larger;
}

#submit{
    background-color: rgb(0, 214, 0);
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: large;
    font-weight: bolder;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

#total{
    font-size: 2em;
    color: hsl(120, 100%, 25%);
}

#submit:hover{
    background-color: hsl(120, 100%, 25%);
}
```
**JavaScript**
```js

function calculate(){
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value/100;
    const year = document.getElementById("year").value;


    const result = (principal*Math.pow((1 + rate),year)).toLocaleString(undefined,{style:"currency", currency:"BDT"});
    document.getElementById("total").textContent = `${result}`;
}
```

**It's not done yet , we have fix some things. Such as:**
- What if someone enters a negetive number ?
- What if someone enters something that is not a number (NaN) ?

**After adding validation checkers**
```js

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
```
## Project 6 : Digital clock

![clock](Images/JS/Clock.png);

**✅ What it does:**
- Shows the current time on the page
- Automatically updates every second
- Formats it to 12-hour time with AM/PM
- Adds leading zeros to hours, minutes, and seconds if needed
- Easy to plug into any webpage

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="clock">00:00:00</div>
    </div>    
<script src="script.js"></script>
</body>
</html>
```

**CSS**
```css
#container{
    background-position: center;
    background-image: url("https://i.pinimg.com/736x/11/8d/6b/118d6b80f0f5e9e132b0f9baa0717567.jpg");
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
}

#clock{
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.093);
    text-align: center;
    width: 100%;
    font-size: 6.5em;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
```
**JavaScript**
```js
function runClock(){
    const clock = document.getElementById("clock");

    const now = new Date();
    let hour = now.getHours().toString().padStart(2,0); // Padstart puts 0 to make the string length 2.
    const minutes = now.getMinutes().toString().padStart(2,0);
    const second = now.getSeconds().toString().padStart(2,0);
    
    let meridien = hour > 12 ? "PM" :  "AM";
    hour = hour % 12 || 12;
    

    let time = `${hour}:${minutes}:${second} ${meridien}`;
    clock.textContent = time;
}

runClock();
setInterval(runClock , 1000); //setInterval calls the function after every 1000ms / 1s.
```

## Project 7 : Stopwatch

![Stopwatch](Images/JS/Stopwatch.png)

This project is a **fully functional digital stopwatch** built using **HTML, CSS, and JavaScript**. It allows users to **start**, **stop**, and **reset** the timer with precision down to **milliseconds**.

**💡 What It Does:**

* Displays elapsed time in the format: `HH:MM:SS:MS`
* Starts from zero and counts time in real-time
* Stops the time and freezes the display
* Resumes from where it left off when restarted
* Resets everything back to zero when needed
* Clean UI, responsive, and minimal delay due to 10ms update interval

**🔧 Key Features:**

* `Start` button to begin or resume timing
* `Stop` button to pause the stopwatch
* `Reset` button to clear the time
* Padded time formatting for consistency (e.g., `01:03:09:07`)
* Prevents bugs like multiple intervals or non-zero resets

**🧠 Concepts Used:**

* DOM manipulation (`getElementById`, `.textContent`)
* JavaScript timers (`setInterval`, `clearInterval`)
* Conditional logic to prevent duplicate intervals
* Time calculations using `Date.now()`
* String formatting using `padStart()` for aesthetic output

**📌 Perfect For:**

* Learning how to handle time and intervals in JS
* Practicing clean state management (`isRunning`, `elapsedTime`)
* Adding a real-time component to a frontend portfolio

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">

</head>
<body>
    
    <div class="container">
        <div id="display">00:00:00:00</div>
        <div id="button-container">
            <button id="Start" onclick="start_time()">Start</button>
            <button id="Stop" onclick="stop_time()">Stop</button>
            <button id="Reset" onclick="reset_time()">Reset</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**CSS**
```css
body{
    background-color: rgb(47, 47, 47);
}

.container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background-color: gray;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 450px;
    transition: 0.3s;
}

.container:hover{
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.755);
    transform: translate(-2px , -2px);
}

#display{
    width: 430px;
    text-align: center;
    font-size: 4em;
    font-family: monospace;  
    border: solid black 2px;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    color: rgb(255, 255, 255);
    text-shadow: 0 0 5px red,
                 0 0 10px red,
                 0 0 20px rgb(255, 100, 100);

    background-color: rgb(31, 31, 31);
    animation: glowPulse 1s infinite;
}

@keyframes glowPulse {
  0% { text-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red; }
  50% { text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red; }
  100% { text-shadow: 0 0 5px red, 0 0 10px red, 0 0 20px red; }
}

button{
    aspect-ratio: 16/9;
    width: 100px;
    border-radius: 30px;
    cursor: pointer;
    color: white;
    font-weight: bolder;
}
button:hover{
    filter: brightness(0.7);
}

#Start{
    background-color: rgb(0, 228, 49);
}

#Stop{
    background-color: red;
}

#Reset{
    background-color: cornflowerblue;
}
```
**JS**
```js
let display = document.getElementById("display");

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let time = null;

function start_time(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(update,10);
        isRunning = true;
    }
}
function stop_time(){
    clearInterval(time);
    isRunning = false; 
    display.textContent = `${hoursString}:${minutesString}:${secondsString}:${miliSecondssString}`;
}
function reset_time(){
    clearInterval(time);
    isRunning = false;
    elapsedTime = 0; // reset the timer

    display.textContent = `00:00:00:00`;
    
}
function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime; // Formula for starting from 0

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % (1000)/10);

    let hoursString = String(hours).padStart(2,0);
    let minutesString = String(minutes).padStart(2,0);
    let secondsString = String(seconds).padStart(2,0);
    let miliSecondssString = String(miliSeconds).padStart(2,0);

    display.textContent = `${hoursString}:${minutesString}:${secondsString}:${miliSecondssString}`;
}
```
## ES6 Modules (ECMAScript 2015)

* **ES6 modules** allow you to organize JavaScript code into **separate files**.
* These files can contain **variables**, **functions**, or **classes** that are **reusable** across multiple files or even different projects.
* You can **export** specific parts of your code from one file and **import** them into another.
* This makes your code more **organized**, **modular**, and **maintainable**.
* ES6 modules were officially introduced in the **ECMAScript 2015 (ES6)** update.

**A standard html code**
```HTML
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script src="script.js"></script>

</body>
</html>
```
`type="module"`

This is the magic line.We're telling the browser:"Yo, this JS file is modern ES6+ module style,so expect import/export, top-level await, and strict vibes."


```html
<script type="module" src="script.js"></script>
```
Now we can use multiple JavaScript files to keep our codebase clean, structured, and easy to manage. This modular approach brings several advantages:

* **Better organization**: Code can be divided into logical sections or features, making it easier to read and maintain.
* **Reusability**: Functions, variables, or classes defined in one file can be reused in others, reducing duplication.
* **Scalability**: As projects grow, modules make it easier to expand without cluttering a single file.
* **Improved teamwork**: Developers can work on separate files independently, which helps in team collaboration.
* **Faster debugging**: Identifying and fixing bugs becomes simpler when code is broken into smaller, focused parts.
* **Cleaner project structure**: Files are grouped by purpose (e.g., utilities, UI handling, API requests), making the project more professional and easier to navigate.

By using `type="module"`, we enable these features and ensure our JavaScript runs in a more modern, strict, and efficient way.

**Example code**

```js
// mathUtil.js (Provider modulw / exporting module)
export const pi = 3.14;
export let radius;
export function getArea(radius){
    return pi * Math.pow(radius,2);
}
```
```js
// script.js (Consumer module / importing module)
import {pi,getArea} from './mathUtil.js';

let area = getArea(124);
console.log(`Area = ${area}`);
```
> Area = 48280.64

**What's going on here ?**

In this script, we're using **ES6 module import syntax** to bring in specific functions from another file:

* `import { pi, getArea } from './mathUtil.js';`
  This line pulls in the `pi` constant and the `getArea` function from a separate file named `mathUtil.js`. These were **exported** from that file, making them available for use here.

* `let area = getArea(124);`
  We're calling the `getArea` function and passing `124` as the input (most likely a radius or side length, depending on the function's logic), then storing the result in the `area` variable.

* `console.log(`Area = \${area}`);`
  This line simply prints out the calculated area in a readable format.

**In short:**

You're importing only what you need, using it directly, and keeping your code **modular, clean, and efficient** — just how modern JavaScript likes it.

## Asynchronus JS

**Sequential Execution:**
- Executes line by line consecutively in a sequential manner.
- Code that waits for an operation to complete.

**Asynchronous Execution:**
- Allows multiple operations to be performed concurrently without waiting.
- Doesn't block the execution flow and allows the program to continue running (I/O operations, network requests, fetching data).
- Handled with: Callbacks, Promises, Async/Await.

**Example**
```js
setTimeout(() => {
    console.log("Task-0");
}, 3000);

console.log("Task-1");
console.log("Task-2");
console.log("Task-3");
```
If this code followed **strict sequential execution** without any async behavior, the output would just print exactly in the order the lines appear — no delays, no waiting:

```
Task-0
Task-1
Task-2
Task-3
```
**Instead it prints**
```
Task-1
Task-2
Task-3
Task-0 (After 3 seconds)
```
Because in pure sequential execution, the program would pause and wait for the `setTimeout` task (which takes 3 seconds) to finish before moving on to the next lines. But since `setTimeout` is async, it actually *doesn't* block and lets the other logs run first.

**But , I want to print the other lines after `Task-0` gets printed after 3 secods**
```js
setTimeout(() => {
    console.log("Task-0");
    otherTask(); // Will be called after task-0 is printed
}, 3000);

function otherTask(){
    console.log("Task-1");
    console.log("Task-2");
    console.log("Task-3");
}
```
`wait 3 seconds`
```
Task-0
Task-1
Task-2
Task-3
```
## Error handeling

- **Error:** An object created to represent a problem that occurs, often related to user input or connection failures.
- **`try { }`:** Encloses code that might potentially cause an error.
- **`catch { }`:** Catches and handles any thrown errors from the `try` block.
- **`finally { }`:** (Optional) Always executes—usually used for cleanup tasks, like closing files, connections, or releasing resources.

```js
console.log("Program started");

console.lag("Programm running"); // Error : console.lag()

console.log("You've reached the end of the programm");
```

```
Program started
script.js:3  Uncaught TypeError: console.lag is not a function
    at script.js:3:9
```
It couldn't reach the end of the program.

We have to make it overlook the error and reach the end.
```js
console.log("Program started");
try {
    console.lag("Programm running")              ;
} 
catch (error) {
    console.error(error);
}
console.log("You've reached the end of the programm");
```
```
Program started

TypeError: console.lag is not a function
    at script.js:3:13
(anonymous) @ script.js:6

script.js:8 You've reached the end of the programm
```
- try block = where errors might happen.
- If an error occurs, catch (error) handles it gracefully.
- Without the try-catch, your program would’ve crashed at console.lag().

So , the program doesn't crash if it faces an error.

We can also make intentional errors
```js
let dividend = Number(window.prompt("Enter dividend:"));
let divisor = Number(window.prompt("Enter divisor:"));

let result = dividend / divisor ;
console.log(`Result = ${result}`);
```
What if we asign the values as NaN

```
Result = NaN
```

It still executes the program. 
Let's make it an error.

```js

try{
    let dividend = Number(window.prompt("Enter dividend:"));
    let divisor = Number(window.prompt("Enter divisor:"));

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Input must be a number."); // Intentional error
    }

    let result = dividend / divisor ;
    
    console.log(`Result = ${result}`);
}
catch(error){
    console.error(error);
}
```
> script.js:18 
Error: Input must be a number.

Now let's throw an error if devided by zero.
```js

try{
    let dividend = Number(window.prompt("Enter dividend:"));
    let divisor = Number(window.prompt("Enter divisor:"));

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Input must be a number.");
    }
    if(divisor == 0){
        throw new Error("You can't divide by 0.") // Error
    }

    let result = dividend / divisor ;
    
    console.log(`Result = ${result}`);
}
catch(error){
    console.error(error);
}
```
> script.js:18  Error: You can't divide by 0

## Project 8 : Calculator
![Calculator](Images/JS/Calculator.png)

🛠️ Features:
- Real-time input display 📟
- Clear button to reset the calculator instantly ♻️
- Error handling for invalid inputs (shows "Syntax - error" briefly) 🚨
- Handles operations like:
- 5 + 3, 9 / 0, 7 * 8 - 2, etc.

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container">
        <div id="solar-panel"></div>

        <input type="text" id="display">

        <div id="btn-container">
            <button onclick="appendToDisplay('1')" id="1">1</button>
            <button onclick="appendToDisplay('2')" id="2">2</button>
            <button onclick="appendToDisplay('3')" id="3">3</button>
            <button onclick="appendToDisplay('+')" class="operator" id="+">+</button>
            <button onclick="appendToDisplay('4')" id="4">4</button>
            <button onclick="appendToDisplay('5')" id="5">5</button>
            <button onclick="appendToDisplay('6')" id="6">6</button>
            <button onclick="appendToDisplay('-')" class="operator" id="-">-</button>
            <button onclick="appendToDisplay('7')" id="7">7</button>
            <button onclick="appendToDisplay('8')" id="8">8</button>
            <button onclick="appendToDisplay('9')" id="9">9</button>
            <button onclick="appendToDisplay('/')" class="operator" id="/">/</button>
            <button onclick="clearDisplay()" id="ac">AC</button>
            <button onclick="appendToDisplay('.')" class="operator" id=".">.</button>
            <button onclick="calculate()" class="operator" id="=">=</button>
            <button onclick="appendToDisplay('*')" class="operator" id="*">*</button>
        </div>
        </div>
    </div>    
<script src="script.js"></script>
</body>
</html>
```

**CSS**
```css
#container{
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    width: fit-content;
    border-radius: 20px;
}
#solar-panel{
    align-self: flex-end;
    margin-bottom: 10px;
    background-color: rgb(41, 41, 41);
    height: 20px;
    width: 80px;
}
#solar-panel:hover ~ #display{
    color: rgba(0, 0, 0, 0);
}
#display{
    transition: color 0.3s;
    text-align: right;
    font-family: monospace;
    font-size: 2em;
    background-color: rgb(161, 161, 161);
    margin: 0 auto;
    width: 230px;
    height: 50px;
    margin-bottom: 20px;
}
#btn-container{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4 , 50px);
    gap: 10px;
}
button{
    aspect-ratio: 1/1;
    width: 50px;
    background-color: orange;
    border: none;
    border-radius: 50%;
    margin: 5px;
    font-weight: bolder;
    font-size: larger;
    cursor: pointer;
}
#ac{
    background-color: crimson;
    color: white;
}
.operator{
    background-color: gray;
}
button:hover{
    filter: brightness(1.2);
}
button:active{
    filter: brightness(0.5);
}
```

**JavaScript**
```js
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
         display.value = eval(display.value); // Eval - Evaluates what's on screen

         if(isNaN(display.value)){
            throw new Error();
         }
    } catch (error) {
        display.value = "Syntax error"
        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}
```
**Note:** `eval()` takes a string and treats it like JavaScript code—so `"2 + 3"` becomes `5`.Powerful but risky, since it can run *any* code if not handled safely.

## DOM
[Video](https://youtu.be/NO5kUNxGIu0)

**The Document Object Model (DOM)** is an object that represents the web page displayed in a browser, providing an API to interact with it. When a web browser loads an HTML document, it constructs the DOM, organizing all elements in a tree-like structure. JavaScript can then access the DOM, allowing dynamic modifications to a web page's content, structure, and style.

**Example**

Change Text of an Element
```js
document.getElementById("title").textContent = "Hello, DOM World!";
```
Change CSS Style
```js
document.querySelector(".box").style.backgroundColor = "lightblue";
```
Create and Add a New Element
```js
const newPara = document.createElement("p");
newPara.textContent = "I'm a new paragraph!";
document.body.appendChild(newPara);
```
### Element selectors
Methods used to target and manipulate HTML elements.  
They allow you to select one or multiple HTML elements from the DOM (Document Object Model).

1. `document.getElementById()` → ELEMENT OR NULL  
2. `document.getElementsByClassName()` → HTML COLLECTION ( Accessed by index )
3. `document.getElementsByTagName()` → HTML COLLECTION  ( Accessed by index )
4. `document.querySelector()` → ELEMENT OR NULL ( Accesses the 1st element )
5. `document.querySelectorAll()` → NODELIST ( Accessed by index )

[Video](https://youtu.be/FQtjI1PC5Z0)

### DOM Navigation
[Video](https://youtu.be/RKXIMnSwUcg)

The process of navigating through the structure of an HTML document using javascript.

```js
.firstElementChild();
.lastElementChild();
.nextElementSibling();
.previousElementSibling();
.parentElement();
.children();
```
**Did some practice with these**
```js
let listElement = document.querySelector("li");
let firstList = document.querySelectorAll("ol")[0];
let secondList = document.querySelectorAll("ol")[1];
let thirdList = document.querySelectorAll("ol")[2];


listElement.style.backgroundColor = "cyan";
listElement.nextElementSibling.style.backgroundColor = "yellow";

secondList.firstElementChild.style.backgroundColor = "pink";
secondList.lastElementChild.style.backgroundColor = "gray";

document.querySelectorAll("li")[11].parentElement.style.backgroundColor = "coral";
```
**Output**
![DOM nav](Images/JS/DOM_Nav.png)

### Adding and Removing elements
**Steps**
1. Create the element
2. Add attributes/properties
3. Append elements to DOM
- Remove elements from DOM
**Example - 1**
```js
const newH1 = document.createElement("h1"); // Create
const newH1_2 = document.createElement("h1"); // Create

newH1.textContent = "This is a new element (bottom)"; // Add properties
newH1_2.textContent = "This is a new element (top)"; // Add properties

document.body.append(newH1); // Append
document.body.prepend(newH1_2); // Append on top

newH1.style.textAlign = "center"; // style (optional)
newH1_2.style.textAlign = "center"; // style (optional)
```
**Output**
![Add el](Images/JS/Add_elements_1.png)

**Now append inside the divs**
```js
const newElement = document.createElement("h1");

const div = document.getElementById("div-1"); // Selecting div

newElement.textContent = "New element"
newElement.style.color = "white"

div.append(newElement);
```
**Output**
![Add el 2](Images/JS/Add_elements_2.png)

**Add elements between 2 divs**
```js
const newElement = document.createElement("h1");

const Div2= document.getElementById("div-2"); // Selecting div

newElement.textContent = "New element"

Div2.parentNode.insertBefore(newElement,div); // Here parentNode is "div-contaier"
```
**or**
```js
let boxes = document.querySelectorAll(".box");

let newElement = document.createElement("h1");
newElement.textContent = "New element";

let parent = document.getElementById("div-container");
parent.insertBefore(newElement, boxes[1]); // Can access by index
```

**Output**
![Add el 3](Images/JS/Add_elements_3.png)
**Now remove the new element from box 1**
```js
const newElement = document.createElement("h1");
newElement.textContent = "New element"
newElement.style.color = "white"
document.getElementById("div-1").append(newElement); 

document.getElementById("div-1").removeChild(newElement); // Removed element
```
**Output**
![Add el 4](Images/JS/Add_elements_4.png)

**Example - 2 (Ordered list)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>     
    <ol id="fruits">
        <li id="apple">Apple</li>
        <li id="orange">Orange</li>
        <li id="banana">Banana</li>
    </ol>       
<script src="script.js"></script>
</body>
</html>
```
**Add element**
```js
let list = document.getElementById("fruits");
let fruits = document.querySelectorAll("li");

let topElement = document.createElement("li");
let bottomElement = document.createElement("li");
let newFruit = document.createElement("li");


topElement.textContent = "Pinapple";
topElement.style.backgroundColor = "yellow"

bottomElement.textContent = "Kiwi";
bottomElement.style.backgroundColor = "lightgreen"

newFruit.textContent = "Coconut";
newFruit.style.backgroundColor = "tomato";

list.prepend(topElement) // Pinapple on top
list.appendChild(bottomElement); // Kiwi at the bottom
list.insertBefore(newFruit , fruits[1]); // Coconut at before orange
```
![List append](Images/JS/Add_elements_in_list_1.png)
## Mouse Event
**Event listener**
Listen for specific events to create interactive web pages 

**Events :** click , mouseover , mouseout

**Format**
```js
target.addEventListener(event , callback);
```

```js
let box = document.getElementById("box");

function changeColor(event){
    event.target.style.backgroundColor = "tomato";
}

box.addEventListener("click" , changeColor);
```
**Output**
![click](Images/JS/Click_event_listener.png)

## How to hide and show html using js
```html
<img src="Images/JS/Stopwatch.png" alt="" height="300px">
<br>
<button id="mybtn">Hide</button>  
```  
```js
let button = document.getElementById("mybtn");
let img = document.querySelector("img");

button.addEventListener("click" , event => {
    if(button.textContent == "Hide"){
        // Button styling
        button.textContent = "Show";
        button.style.background = "red";

        // Toggling visibilty of the img
        img.style.visibility = "hidden";
    }
    else{
        button.textContent = "Hide";
        button.style.background = "green"

        img.style.visibility = "visible";
    }
})
```
![Visibilty btn](Images/JS/visibility_toggle.png)

## Nodelist
- Static collection of HTML elements by (id, class, element)
- Can be created by using querySelectorAll()
- Similar to an array, but no (map, filter, reduce)
- NodeList won't update to automatically reflect changes

[**Video tutotrial**](https://youtu.be/5n3qPKgLEDc?list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv)
Must watch this one

## Classlist
[**Video tutotrial**](https://youtu.be/62qN2RcpIAE)

methods 
- add()
- remove()
- toggle()
- replace(old , new)
- contains() //boolean

## Project : Rock Paper Scissor game
![RPS](Images/JS/RPS.png);

🕹️ **Core Features:**

1. **Three-Choice Gameplay**:

   * You click either 🪨 Rock, 📄 Paper, or ✂️ Scissor.
   * The bot (computer) picks a random choice every round.
   * Your choice and the bot's are shown on screen.

2. **Winner Checker**:

   * The game checks who won the round based on standard RPS rules:

     * Rock beats Scissor
     * Paper beats Rock
     * Scissor beats Paper
   * It displays either:

     * ✅ "You win"
     * ❌ "You lose"
     * ⚖️ "It’s a tie"

3. **Scoreboard**:

   * Keeps track of how many rounds **you** or the **bot** have won.
   * Auto-increments the score with each round.

4. **Color-Coded Result Display**:

   * Green = You win
   * Red = You lose
   * Gray = Tie

5. **Restart Button**:

   * Click to **reset scores** and clear all displayed info.
   * Great for starting a new session or flexing a clean win streak.

🌐 **Tech Stack Used:**

* **HTML**: For buttons and UI elements
* **CSS** (assumed): For styling and color feedback
* **JavaScript**: Handles all the logic and DOM interaction
```js
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

let userChoice = document.getElementById("userChoice");
let computerChoice = document.getElementById("computerChoice");
let result = document.getElementById("winnerCheck");

let UserInput, compterInput;
let choices = ["Rock", "Paper", "Scissor"];

let computerScore = document.getElementById("computer_score");
let userScore = document.getElementById("user_score");

let restart = document.getElementById("restart");

// Reusable function
function playGame(choice) {
    UserInput = choice;
    compterInput = choices[Math.floor(Math.random() * 3)];
    userChoice.textContent = `You : ${UserInput}`;
    computerChoice.textContent = `Computer : ${compterInput}`;

    if(UserInput == compterInput){
        result.textContent = "It's a tie"
    }
    else{
        switch (UserInput) {
            case "Rock":
                compterInput == "Paper" ? result.textContent = "You lose" : result.textContent = "You win"
                break;

            case "Paper":
                compterInput == "Scissor" ? result.textContent = "You lose" : result.textContent = "You win"
                break;

            case "Scissor":
                compterInput == "Rock" ? result.textContent = "You lose" : result.textContent = "You win"
                break;
        
        }

    }

    if(result.textContent == "You win"){
        userScore.textContent++;
        result.style.color = "green";
        
    }
    else if(result.textContent == "You lose"){
        computerScore.textContent++;
        result.style.color = "red";
    }
    else{
        result.style.color = "grey";
    }
}

// Button event listeners
rock.addEventListener("click", () => playGame("Rock"));
paper.addEventListener("click", () => playGame("Paper"));
scissor.addEventListener("click", () => playGame("Scissor"));

restart.addEventListener("click" , () => {
    computerScore.textContent = 0;
    userScore.textContent = 0;
    result.textContent = "";
    userChoice.textContent = "You :"
    computerChoice.textContent = "Computer :";
});
```
## Project : Image slider

* ✅ **Image Array Handling**
  Stores all image paths in an array for dynamic access.

* ✅ **Next Button Functionality**
  On clicking "Next", increments the index `i`, and updates the image source using `image.setAttribute()`.

* ✅ **Previous Button Functionality**
  On clicking "Prev", decrements the index `i`, and updates the image source accordingly.

* ✅ **Circular Navigation**
  If `i` goes beyond the array length or below 0, it wraps around (resets to 0 or last index) to create an infinite loop effect.

* ✅ **DOM Element Targeting**
  Uses `getElementById()` to connect buttons and the image with JS logic.

* ✅ **Dynamic Attribute Updating**
  Uses `setAttribute("src", ...)` to swap image sources without reloading the page.

* ✅ **State Tracking with Index**
  Maintains a global index variable `i` to track and control the current image being displayed.

![Image slider](Images/JS/Image_Slider.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Image slider</h1>
  <div id="container">
    <button id="prev"><</button>
    <img id="image" src="Images/JS/Add_elements_1.png" alt="">
    <button id="next">></button>
  </div>
<script src="script.js"></script>
</body>
</html>
```
```js
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let images = [
    "Images/JS/Add_elements_1.png",
    "Images/JS/Add_elements_2.png",
    "Images/JS/Add_elements_3.png",
    "Images/JS/Add_elements_4.png"
];
let img = document.getElementById("image");

let i = 0;
next.addEventListener("click",()=>{
    i++;
    if(i >= images.length){
        i = 0;
    }
    image.setAttribute("src", `${images[i]}`);

});

prev.addEventListener("click",()=>{
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    image.setAttribute("src", `${images[i]}`);

});
```

## Callback hell
Situation in JS where callbacks are nested within other callbacks in the degree where the code is difficult to read .
- Use promises , async/await to avoid callback hell.
**Example**
```js
console.log("Start of Callback Hell");
setTimeout(() => {
    console.log("Step 1: Connecting to database...");
    setTimeout(() => {
        console.log("Step 2: Fetching user data...");
        setTimeout(() => {
            console.log("Step 3: Authenticating user...");
            setTimeout(() => {
                console.log("Step 4: Fetching user preferences...");
                setTimeout(() => {
                    console.log("Step 5: Loading dashboard widgets...");
                    setTimeout(() => {
                        console.log("Step 6: Sending analytics data...");
                        setTimeout(() => {
                            console.log("Step 7: Fetching latest news feed...");
                            setTimeout(() => {
                                console.log("Step 8: Rendering news cards...");
                                setTimeout(() => {
                                    console.log("Step 9: Updating notifications...");
                                    setTimeout(() => {
                                        console.log("Step 10: Everything is loaded 🎉");
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
```
```
Start of Callback Hell
Step 1: Connecting to database...
Step 2: Fetching user data...
Step 3: Authenticating user...
Step 4: Fetching user preferences...
Step 5: Loading dashboard widgets...
Step 6: Sending analytics data...
Step 7: Fetching latest news feed...
Step 8: Rendering news cards...
Step 9: Updating notifications...
Step 10: Everything is loaded 🎉
```
## Promises

A **Promise** is an object that helps you handle tasks that take time — like loading data or waiting for something.

It says:

> *“I’ll do this task. If it works, I’ll give you the result. If it fails, I’ll let you know what went wrong.”*


**🔄 Promise States:**

* **Pending** – Task is still happening
* **Resolved** – Task is done successfully
* **Rejected** – Task failed with an error

```js
new Promise((resolve, reject) => {
  // your async code here
});
```
```js
function cleanRoom(callback){
    setTimeout(() => {
        console.log("Room cleaned.");
        callback();
    }, 1000);
}

function takeOutTrash(callback){
    setTimeout(() => {
        console.log("Trash is taken out.");
        callback();
    }, 500);
}

function doHomework(callback){
    setTimeout(() => {
        console.log("Homework is done.");
        callback();
    }, 1500);
}

// This leads to a callback hell
doHomework(() =>{
    cleanRoom(() =>{
        takeOutTrash(() =>{
            console.log("All task are finished.");
        });
    });
});
```
```
'Homework is done.'
'Room cleaned.'
'Trash is taken out.'
'All task are finished.'
```
To avoid callback hell , we can use promises.
```js
function cleanRoom(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Room cleaned.");
        }, 1000);
    })
    
}

function takeOutTrash(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Trash is taken out.");
        }, 500);  
    })
}

function doHomework(callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Homework is done.");
        }, 1500);
        
    })
}

//Call by using chaining promises

doHomework() // 1st do homework

    .then(value => {
    console.log(value) 
    return cleanRoom() // Then clean room
    })

    .then(value => {
        console.log(value)
        return takeOutTrash() // Then take the trash out
    })
    
    .then(value => {
        console.log(value)
        console.log("Finised all task.")
    })
    
    .catch(error => {
        console.log("Something went wrong",error);
    })
```

**Then , whats is the use of `reject` ??**

> This is where the `error` comes in
```js
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
        console.error("❌ Something went wrong:", error);
    });
```
```
'Homework is done.'
[ '❌ Something went wrong:', 'You didn't clean the room.' ]
```

**Another `promise` I've done for practice**\
```js
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
```

## Async / Await 
- Async = makes a function return a promise  
- Await = makes an async function wait for a promise  

---

- Allows you to write asynchronous code in a synchronous manner  
- Async doesn't have resolve or reject parameters  
- Everything after Await is placed in an event queue

```js
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
```

We can do it with async and await

🔄 Steps to turn your `.then()` chain into `async/await`:

1. **Wrap the whole chain in an `async function`** (e.g., `async function dailyRoutine() {}`)

2. **Use `await` before each function call**, like:

   * `await goToUni()`
   * `await goToTuition()`
   * `await learnJS()`

3. **Wrap the whole logic in a `try...catch` block**
   That way, if any of the Promises reject, it’ll jump straight to `catch`.


**Recap:**

* `await` *waits* for the Promise to resolve/reject
* Cleaner than `.then()` chaining
* `try...catch` replaces the final `.catch()`

```js

async function tasks(){
    try{
        const goToUniResult = await goToUni();
        console.log(goToUniResult);

        const goToTuitionResult = await goToTuition();
        console.log(goToTuitionResult);

        const learnJSResult = await learnJS();
        console.log(learnJSResult);
    }
    catch(error){
        console.log(error);
    }
    
}

tasks();
```
```
'You went to university.'
'You went to tuition.'
'You\'ve learned JS.'
```

## JSON (JavaScript Object Notation)

* A simple, text-based format for storing and sharing data
* Commonly used to exchange data between a **server** and a **web application**
* Data is organized as:

  * **Objects**: `{ "key": "value" }`
  * **Arrays**: `[ "value1", "value2" ]`
* Looks like JavaScript objects, but used just for data
* Easy to read, easy to write, and supported by almost every programming language
* Perfect for sending data over the internet in a clean and structured way

### Stringify
It converts a json array or object to string.
```js
const names = ["Spongebob","Patrick","Squidward","Sandy","Mr.Krab"]
console.log(JSON.stringify(names));
```
```
'["Spongebob","Patrick","Squidward","Sandy","Mr.Krab"]'
```

### Parse
It converts a string into a JSON object.
```js
const jsonString = '[{"name":"Spongebob","age":31,"isEmployed":true},{"name":"Patrick","age":34,"isEmployed":false},{"name":"Squidward","age":40,"isEmployed":true}]'

console.log(JSON.parse(jsonString));
```
```
[
  { name: 'Spongebob', age: 31, isEmployed: true },
  { name: 'Patrick', age: 34, isEmployed: false },
  { name: 'Squidward', age: 40, isEmployed: true }
]
```
For now , I converted a regular array/object to string (vice-versa). Next time , I'll fetch from a JSON file.

**Fetching a json file**

**people.json**
```json
[
    {
        "name" : "Spongebob",
        "age" : 31,
        "isEmployed" : true
    },
    {
        "name" : "Patrick",
        "age" : 34,
        "isEmployed" : false
    },
    {
        "name" : "Squidward",
        "age" : 40,
        "isEmployed" : true
    }
]
```
Let's fetch data from `people.json`.

```js
fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
```
```
(3) [{…}, {…}, {…}]
0: {name: 'Spongebob', age: 31, isEmployed: true}
1: {name: 'Patrick', age: 34, isEmployed: false}
2: {name: 'Squidward', age: 40, isEmployed: true}
length: 3
```
**What's Happening :**

I tell JavaScript to *fetch* the file named `"people.json"`.  
Then, when it gives me the response (like a sealed envelope), I open it using `.json()` so I can read the data inside.  
After that, I print out the final value in the console to see what’s in the file.

**What's `response`:**

`response` is like a *sealed envelope* that JavaScript gives me after fetching the file.  
It’s not the actual data — it’s a whole object with things like:
- status codes
- headers
- metadata

To actually get the *real* data (like JSON content), I have to call `.json()` on the `response` to open the envelope and read what’s inside.

You're basically saying:
> “Hey JS, grab that parcel (people.json), open it, and show me what's inside.”

Tweaking the code 
```js
fetch("people.json")
    .then(response => response.json())
    
    .then(value => value.forEach(element => {
        console.log(element.name);
        
    }))
```
```
Spongebob
Patrick
Squidward
```

**In this case, `value` is the entire package, and `element` is each product inside that package."**

## **🍪 JavaScript Cookies**
[Video (CodeWithHarry)](https://youtu.be/sHrwueeeMmY)

Cookies are *small pieces of data* stored in the browser — usually to remember:

* Whether you're logged in
* Your theme (dark/light)
* Shopping cart contents, preferences, etc.

---

**How to Set a Cookie (manually)**

```js
document.cookie = "username=Mahmud; expires=Fri, 01 Jan 2027 12:00:00 UTC; path=/";
```

This creates a cookie named `username` with the value `Mahmud`, which expires on Jan 1, 2027.

---

**How to Read Cookies**

```js
console.log(document.cookie);
```

Returns a string of all cookies:

```
username=Mahmud; color=dark
```

---

**Expired Cookies Are Auto-Deleted**

If you set the expiry date in the past, the browser deletes the cookie instantly:

```js
document.cookie = "firstname=Abdullah; expires=Sat, 13 May 2021 12:00:00 UTC; path=/";
console.log(document.cookie);
```

**Output:**

```
(nothing – it's expired)
```

---

**Multiple Cookies Can Coexist**

Cookies with **different names** will be added, not replaced:

```js
document.cookie = "name=Mahmud; expires=Thu, 01 Jan 2026 12:00:00 UTC; path=/";
document.cookie = "age=21; expires=Thu, 01 Jan 2026 12:00:00 UTC; path=/";

console.log(document.cookie);
```

**Output:**

```
name=Mahmud; age=21
```

But if you set a cookie with the **same name**, it **overwrites** the previous one:

```js
document.cookie = "name=Mahmud; expires=Thu, 01 Jan 2026 12:00:00 UTC; path=/";
document.cookie = "name=Abdullah; expires=Thu, 01 Jan 2026 12:00:00 UTC; path=/";

console.log(document.cookie);
```

**Output:**

```
name=Abdullah
```

---

**Setting Cookies with a Function**

```js
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 86400 * 1000)); // days to ms
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/;`;
}

setCookie("email", "mahmud123@gmail.com", 365);
console.log(document.cookie);
```

**Output:**

```
email=mahmud123%40gmail.com
```
### encodeURIComponent
```js
let key = prompt("Enter key :");
let value = prompt("Enter value :");

document.cookie = `${key}=${value}`
console.log(document.cookie)
```
If i type `key = name` and `value = Mahmud`
```
name=Mahmud
```
But , if i write `key = #$@` and `value = mahmud`
```
(nothing)
```
It doesn't accept special characters.

This is where `encodeURIComponent` comes in.
```js
let key = prompt("Enter key :");
let value = prompt("Enter value :");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)
```

```
%23%24%40=mahmud ... ... But this ain't the thing i wanted 😕
```

**Now we need `decodeURIComponent`**
```js
let key = prompt("Enter key :");
let value = prompt("Enter value :");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(decodeURIComponent(document.cookie))
```
```
#$@=mahmud 😁
```
### **How to delete cookies**
We can change the expiration date to something in the past, like 1997.
```js
document.cookie = "name=mahmud; expires=Sun, 01 Jan 2030 12:00:00 UTC; path=/"
document.cookie = "age=21; expires=Sun, 01 Jan 2030 12:00:00 UTC; path=/"

console.log(document.cookie);
```
```
name=mahmud; age=21
```
If i delete both lines in the code
```js
console.log(document.cookie);
```
```
name=mahmud; age=21
```
**Still there...** 

Cookies stick around even after you delete the code that created them because they’re stored **in the browser**, not inside your actual `JavaScript` file. When you set a cookie with a **future expiration date**, the browser holds onto it until that time — **regardless of whether the original script still exists**. So just removing or commenting out the `JavaScript` doesn’t remove the cookie; it’s like deleting the recipe but the cookies are still in the jar. To actually remove them, you need to **explicitly overwrite** them with an **expired date** using something like:

```js
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

…or clear them manually through **browser settings or dev tools**.

**Or we can make a `deleteCookie()` function:**
```js
console.log(document.cookie);

function deleteCookie(key){
    document.cookie = `${key}=; expires=Thu, 01 Jan 1997 12:00:00 UTC; path=/`;
}

deleteCookie("name");

location.reload(true); // For hard reload

```
```
age=21
```
`name=Mahmud` cookie is deleted.
```js
deleteCookie("age");
```
```
(both gone)
```
**How to delete all cookies with a single function**
```js
function deleteAllCookie(){
    document.cookie.split(";").forEach(cookie => {
        let key = cookie.split("=")[0].trim();
        document.cookie = `${key}=; expires=Thu, 01 Jan 1997 12:00:00 UTC; path=/`;
    })
}

deleteAllCookie();
```
```
```
Aight Mahmud, let’s walk through your `deleteAllCookie()` like we’re debugging it with a magnifying glass 🔍🍪

---

### 👇 Your code:

```js
function deleteAllCookie() {
    document.cookie.split(";").forEach(cookie => {
        let key = cookie.split("=")[0].trim();
        document.cookie = `${key}=; expires=Thu, 01 Jan 1997 12:00:00 UTC; path=/`;
    });
}

deleteAllCookie();
```

---

**🧠 Step-by-Step Execution:**


**🛠 Step 1: `document.cookie`**

* This gives you all cookies on the site as one long string:

```js
"name=mahmud; age=21; theme=dark"
```

---

**🔪 Step 2: `.split(";")`**

* You split the string by `;`, so you get:

```js
["name=mahmud", " age=21", " theme=dark"]
```

Each element is now one cookie.

---

**🔁 Step 3: `.forEach(cookie => { ... })`**

* You loop through each cookie one by one.

---

**🍪 Step 4: `cookie.split("=")[0].trim()`**

* For `" age=21"` → `cookie.split("=")` gives `[" age", "21"]`
* `[0]` grabs `" age"`, then `.trim()` cleans it to `"age"`
* So now `key = "age"`

---

**💀 Step 5: Overwrite with expired cookie**

```js
document.cookie = `${key}=; expires=Thu, 01 Jan 1997 12:00:00 UTC; path=/`;
```

* This sets the `age` cookie to an empty value `=`
* Sets the expiration date **in the past**
* Tells the browser: *"Delete this."*

---

🔁 Repeat for `"name"` and `"theme"`

---

**✅ Final Result:**

All cookies listed in `document.cookie` are **cleared** from the browser (if they were set with `path=/`).

## fetch data from an API (Application Programming Interface)
[Video (BroCode)](https://youtu.be/37vxWr0WgQk)
- Function used for making HTTP requests to fetch resources. (JSON style data , image , files)
- Simplifies asynchronus data fetching in javascript and used for interacting with APIs to retrieve and send data asynchronusly over the web.
- fetch(url),{options}

**We're gonna fetch data from [pokeapi.co](https://pokeapi.co/)**
> `fetch` is one kind of promise
```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response))
    .catch(error => console.error(error))
```
![Response code](Images/JS/pikachu_resCode.png)

this has a status code `200` (ok).

Means : **Request succeeded, data's in the response**

And 404 (Not found) means , **Wrong URL or resource doesn't exist**

> The code above will show a huge object filled with JSON, Blob, and other properties **because `response` is a Response object, not the actual data — to access the JSON data, you need to call `response.json()` first.**

Wanna turn that into a one-liner wisdom bomb?

> `response` ain't the data — it's the envelope. You gotta `.json()` it to read the letter
```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data)) // data (object)
    .catch(error => console.error(error))
```
![pikachu json](Images/JS/pikachu_json.png)
```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => {
        console.log(`Name = ${data.name}`)
        console.log(`Weight = ${data.weight}`)
    })
    .catch(error => console.error(error))
```
```
Name = pikachu
Weight = 60
```
**Error handling**

```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
```
This fetches data about pickachu..What if I write

```js
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
```
Here , spongebob is not a pokemon , so obviously it doesn't exist in the API site. 

**So, We have to throw an error.**
```js
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not find the resource.");
        }
        return response.json();
    })
    .then(data => {
        console.log(`Name = ${data.name}`)
        console.log(`Weight = ${data.weight}`)
        console.log(`ID = ${data.id}`)
    })
    .catch(error => console.error(error))
```
```
Error: Could not find the resource
```
**With async and await**
```js
async function fetchData(){
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if(!response.ok){
            throw new Error("Pokemon not found");
        }

        const data = await response.json();

        console.log(data.name);
        console.log(data.weight);
        console.log(data.id);

    } catch (error) {
        console.error(error);
    }
}

fetchData();
```
```
pikachu
60
25
```
### Mini project : Pokémon Lookup Card .

![Pokemon card](Images/JS/pokemon.png)

**🔥 What it does:**

* Lets users enter a Pokémon name.
* Fetches live data from the [PokéAPI](https://pokeapi.co/).
* Displays:

  * Sprite image
  * Pokémon name
  * Weight
  * Type
* Smooth fade-out ➜ update ➜ fade-in transition on data change.
* Handles errors (invalid name or typo) with a clean “Not Found” message.
* Built with **vanilla JS, HTML, and CSS** — no frameworks, just raw skill.

**Code**

**HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <input type="text" placeholder="Enter pokemon name" id="pokemonName"><br>
    <button id="showImg" onclick="fetchData()">Show image</button>

    <div id="card">
        <img id="pokemonImage" src="" alt="pokemon sprite">
        <div id="dataContainer">    
            <p id="name">Name</p>
            <p id="weight">Weight</p>
            <p id="type">Tree type pokemon</p>
        </div>
    </div>

<script src="script.js"></script>
</body>
</html>
```
**CSS**
```css
#card{
    transition: opacity 0.5s ease;
    opacity: 0;
}
/* This is the main part , there can be more styling*/
```
**JavaScript**
```js
async function fetchData() {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const card = document.getElementById("card");
    const nameEl = document.getElementById("name");
    const weightEl = document.getElementById("weight");
    const typeEl = document.getElementById("type");
    const imgEl = document.getElementById("pokemonImage");
    const dataContainer = document.getElementById("dataContainer");

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Fetching data from api
        if (!response.ok) throw new Error("Pokemon not found");
        const data = await response.json();
        await console.log(data)
        
        // Fade out first
        card.style.opacity = 0;

        setTimeout(() => {
            imgEl.style.display = "block";
            dataContainer.style.backgroundColor = "skyblue";
            imgEl.src = data.sprites.front_default;
            nameEl.textContent = `Name : ${capitalize(pokemonName)}`;
            weightEl.textContent = `Weight : ${data.weight} units`;
            typeEl.textContent = `${capitalize(data.types[0].type.name)} type pokemon.`;

            card.style.display = "flex";
            card.style.opacity = 1;
        }, 300);

    } catch (error) {
        console.error(error);

        // Fade out first
        card.style.opacity = 0;

        setTimeout(() => {
            imgEl.style.display = "none";
            dataContainer.style.backgroundColor = "pink";
            nameEl.textContent = "Not Found!";
            weightEl.textContent = "";
            typeEl.textContent = "Try another name.";
            card.style.display = "flex";
            card.style.opacity = 1;
        }, 300);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
```
## Doubt solve
### Asynchronus js 
**Link : FreeCodeCamp**[https://youtu.be/ZYb_ZU8LNxs](https://youtu.be/ZYb_ZU8LNxs)