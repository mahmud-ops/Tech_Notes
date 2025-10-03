[video url](https://youtu.be/ZvZ7gvcmPmI)

TypeScript (TS) is a **superset of JavaScript** that adds **static typing** and modern features to make code more predictable and easier to maintain. It lets you define types for variables, functions, and components, so errors are caught **before runtime**, which is especially useful in large apps like React projects. Essentially, TS is JavaScript with safety checks and smarter tooling—write JS, but smarter.


Here’s a quick JS vs TS comparison with basic snippets:

---

**1. Variables & Types**

```javascript
// JavaScript
let name = "Mahmud";
name = 42; // allowed, no error

// TypeScript
let name: string = "Mahmud";
name = 42; // ❌ Error: Type 'number' is not assignable to type 'string'
```

---

**2. Functions**

```javascript
// JavaScript
function add(a, b) {
  return a + b;
}
add("2", 3); // returns "23", no error

// TypeScript
function add(a: number, b: number): number {
  return a + b;
}
add("2", 3); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

**3. Objects / Interfaces**

```javascript
// JavaScript
const user = { name: "Mahmud", age: 20 };
user.age = "twenty"; // allowed

// TypeScript
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Mahmud", age: 20 };
user.age = "twenty"; // ❌ Error
```

---

**4. Optional & Default Parameters**

```javascript
// JavaScript
function greet(name) {
  console.log("Hello " + (name || "Guest"));
}

// TypeScript
function greet(name: string = "Guest") {
  console.log("Hello " + name);
}
```

# setup 

**1. Install Node.js**
Check if installed:

```bash
node -v
npm -v
```

If not, [download Node.js](https://nodejs.org/) and install.

---

**2. Install TypeScript globally**

```bash
npm install -g typescript
tsc -v   # check version
```

---

**3. Create a project folder and move in**

```bash
mkdir my-ts-project
cd my-ts-project
```

---

**4. Initialize `tsconfig.json` (compiler settings)**

```bash
tsc --init
```

This generates a `tsconfig.json`.
👉 Minimum edits you should make:

```jsonc
{
  "compilerOptions": {
    "target": "es6",             // modern JS
    "module": "commonjs",        // for Node
    "rootDir": "./src",          // your TS files
    "outDir": "./dist",          // compiled JS output
    "strict": true               // catch errors early
  }
}
```

---

**5. Create folders and files**

```bash
mkdir src
cd src
echo "let message: string = 'Hello TypeScript'; console.log(message);" > index.ts
```

---

**6. Compile TS → JS**

```bash
tsc   # compiles all files in src → dist
```

---

**7. Run JS with Node**

```bash
node dist/index.js
```

---

**8. (Optional but useful) Auto-compile on save**
Instead of running `tsc` every time:

```bash
tsc -w
```

This watches files and re-compiles automatically.

---

**⚡ Quick sanity check flow:**

```bash
node -v
npm install -g typescript
tsc --init
# configure tsconfig
# write index.ts in src/
tsc
node dist/index.js
```

# Types

Types in TypeScript are a way to describe the shape and nature of data. They ensure variables, functions, and objects behave in predictable ways, reducing runtime errors and improving readability.

```ts
let age: number = 20
let username: string = "Mahmud"
let isActive: boolean = true
```

Using types forces consistency. For example, once a variable is declared as a number, assigning a string will throw an error.

## Built in types

TypeScript comes with built-in primitive types like number, string, boolean, null, undefined, and more advanced ones like any, unknown, and never.

```ts
let id: number = 101
let title: string = "Intro to TS"
let flag: boolean = false
let data: any = "can be anything"
```

Choosing the right built-in type makes the code safe. For example, avoid using `any` unless necessary, since it disables type checking.

## Type annotation

Type annotations allow developers to explicitly set the type of variables, parameters, or return values. This prevents TypeScript from making incorrect inferences.

```ts
let score: number
score = 95   // valid
score = "95" // error
```

Annotations are useful when declaring variables first and assigning values later, ensuring consistency across the codebase.

# Objects with type annotation

Objects in TypeScript can be annotated to specify the type of each property. This helps define the expected structure, avoiding errors when accessing or assigning values.

```ts
let user: { name: string; age: number } = {
  name: "Mahmud",
  age: 20
}
```

If a required property is missing or given a wrong type, TypeScript will catch it. Optional properties can be defined with a `?`.

```ts
let student: { name: string; grade?: number } = { name: "Nabiha" }
```

# functions with type annotation

Functions in TypeScript allow type annotations on parameters and return values. This ensures that functions are used correctly and consistently.

```ts
function add(a: number, b: number): number {
  return a + b
}

let result = add(5, 3) // valid
// let wrong = add("5", "3") // error
```

If the return type is not specified, TypeScript infers it. Explicit return types are helpful in larger projects for clarity and debugging.

```ts
function logMessage(message: string): void {
  console.log(message)
}
```

Here, `void` indicates the function does not return any value.

Got it — here’s the continuation in the same **.md style** with no fluff, straight explanations, fixed spellings, and minimal clean code.

---

````md
## Optional and default parameter
In TypeScript, function parameters can be marked as optional with `?` or given default values. This makes functions more flexible while maintaining type safety.

```ts
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`
}

console.log(greet("Mahmud"))
console.log(greet("Mahmud", 20))

function multiply(a: number, b: number = 2): number {
  return a * b
}

console.log(multiply(5))     // uses default b=2
console.log(multiply(5, 3))  // overrides default
````

Optional parameters must come last in the function signature.

## Function rest parameter

Rest parameters let a function accept any number of arguments as an array. This is useful when you don’t know how many values will be passed.

```ts
function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0)
}

console.log(sum(1, 2, 3))       // 6
console.log(sum(5, 10, 15, 20)) // 50
```

Rest parameters are always typed as arrays.

## Arrow function

Arrow functions are a shorter way to write functions in TypeScript. They are commonly used for callbacks and maintain the `this` context of the surrounding scope.

```ts
const add = (a: number, b: number): number => a + b
console.log(add(10, 5))

const square = (n: number): number => {
  return n * n
}
console.log(square(6))
```

Arrow functions are concise and often replace traditional function expressions.

## Anonymous function

Anonymous functions do not have a name and are often used as arguments to other functions. They can also be assigned to variables.

```ts
let greet = function(name: string): string {
  return `Hello ${name}`
}

console.log(greet("Mahmud"))

setTimeout(function() {
  console.log("This runs after 1 second")
}, 1000)
```
Anonymous functions are useful for quick, inline logic without creating a named function.

## void / never
The `void` type is used for functions that do not return any value. The `never` type represents functions that never finish, such as those throwing errors or running infinite loops.

```ts
function logMessage(msg: string): void {
  console.log(msg)
}

function throwError(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {}
}
````

`void` means no return, while `never` means the function does not even complete normally.

## union types

Union types allow a variable to hold more than one type. This is useful for flexible function arguments or variables.

```ts
let value: string | number
value = "hello"
value = 42
```

Unions make code flexible but still type-safe. Type narrowing can be used inside functions to handle different cases.

```ts
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID is string:", id.toUpperCase())
  } else {
    console.log("ID is number:", id)
  }
}
```

## Literal types

Literal types restrict a variable to specific values, useful for settings, modes, or configuration options.

```ts
let direction: "up" | "down" | "left" | "right"
direction = "up"
// direction = "forward" // error
```

They help create exact, predictable values in code.

## Nullable types

Nullable types include `null` or `undefined` alongside other types. This avoids assigning invalid values accidentally.

```ts
let username: string | null = null
username = "Mahmud"

function greet(name: string | undefined) {
  console.log(`Hello ${name ?? "Guest"}`)
}
```

Using `null` and `undefined` in unions makes handling optional or missing values explicit.

## Type alias

A type alias gives a custom name to a type, making complex definitions more readable and reusable.

```ts
type UserId = string | number
let id1: UserId = 101
let id2: UserId = "xyz123"

type Point = { x: number; y: number }
let p1: Point = { x: 10, y: 20 }
```

Aliases reduce duplication and improve maintainability.

## Intersection type

Intersection types combine multiple types into one, requiring all properties to be present.

```ts
type Person = { name: string }
type Employee = { id: number }

type Staff = Person & Employee

let emp: Staff = { name: "Mahmud", id: 101 }
```

They allow building complex structures by merging types.

# Type annotation with arrays

Arrays can be annotated to ensure all elements are of the same type.

```ts
let numbers: number[] = [1, 2, 3]
let names: string[] = ["Mahmud", "Nabiha"]

let mixed: (string | number)[] = [1, "two", 3]
```

Type-safe arrays prevent invalid element assignments.

## Tuple

Tuples define fixed-length arrays with specific types at each position.

```ts
let user: [string, number] = ["Mahmud", 20]
// user = [20, "Mahmud"] // error
```

Tuples are useful for representing ordered pairs or structured data.

## Enums

Enums assign human-readable names to a set of numeric or string values.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up
console.log(dir) // 0

enum Status {
  Success = "SUCCESS",
  Error = "ERROR"
}
```

Enums make code more readable and self-documenting.

# Interface

Interfaces describe the shape of objects and are preferred for modular and scalable designs.

* Modular development
* Progressive enhancement
* Clear separation of concerns

```ts
interface User {
  id: number
  name: string
  active: boolean
}

let user: User = { id: 1, name: "Mahmud", active: true }
```

Interfaces can also extend other interfaces for reusability.

```ts
interface Admin extends User {
  role: string
}

let admin: Admin = { id: 2, name: "Nabiha", active: true, role: "manager" }
```

## Built in interface

TypeScript provides built-in interfaces for DOM and browser objects such as HTML elements, images, and events.

```ts
let img: HTMLImageElement = document.createElement("img")
img.src = "logo.png"
img.alt = "logo"

let btn: HTMLButtonElement = document.querySelector("button")!
btn.addEventListener("click", (event: MouseEvent) => {
  console.log("Button clicked", event.clientX)
})
```

Built-in interfaces expose the properties and methods available on these objects, ensuring proper usage and autocomplete support.
