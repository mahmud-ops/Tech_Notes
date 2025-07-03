# React JS
**By Mosh Hamedani**
[Repo : The codes used in this course](https://github.com/mosh-hamedani/react-course-part1)

**Prerequisites**
- HTML
- CSS 
- jS
- Typescript (Optional)

## Environment setup (VS code)
Gotta install nodeJS version 16+
![Node js download](Images/JS/React/NodeJS_download.png)

after installing , check
![Node install check](Images/JS/React/node_install_check.png)

> `Prettier` vscode extention is recommended. (Settngs > Enable `Format on save`)

## What's react ?

React is a JavaScript library that helps you build user interfaces, especially the front-end of web apps. Instead of messing with `document.createElement` or a bunch of DOM code, React lets you build stuff using components—small, reusable pieces of code that return HTML-looking syntax called JSX. It updates the UI automatically when data changes, so you don’t have to manually control what changes where. Basically, it makes your web apps faster, cleaner, and way easier to manage once things get big.

## First react app
There are two tools for it
- Create react app (CRA)
- Vite
We're gonna use vite.
**Start**
* Open **CMD** and navigate to the folder where you want your project:

  ```bash
  cd "C:\Users\YourName\Path\To\Folder"
  ```

* Run the Vite project setup command:

  ```bash
  npm create vite@latest
  ```

* When prompted:

  * 📦 Enter a **project name** (e.g., `first_react_app`)
  * ⚛️ Select **React** as the framework
  * 🟦 Choose **TypeScript** or **JavaScript** (you picked TypeScript)

* Once done, navigate into your new project folder:

  ```bash
  cd first_react_app
  ```

* Install the dependencies:

  ```bash
  npm install
  ```

* Start the dev server:

  ```bash
  npm run dev
  ```

* ✅ Your app will be live on something like `http://localhost:5173`

![First](Images/JS/React/localhost.png)

**This is what the folder looks like with the installed packeges**
![Folder](Images/JS/React/firstFolder.png)

Now go touch grass after seeing that sweet React welcome screen 🌱

## Create a react component
Extension : .ts (Used for typscript) , **.tsx (Used for typescript based react components)**

1. first , open a new .tsx file in the src folder
![image](Images/JS/React/f_react_component.png)

2. The `app.tsx` is the main folder 

3. Write some code in the `messege.tsx` file. (Testing)

**We're making a function based component**
```js
// Defining a functional React component named Messege
function Messege(){
    // JSX (JavaScript XML): This lets us write HTML-like syntax in JS
    return <h1>Hello world</h1>; // Renders an <h1> element with "Hello world"
}

// Exporting the Messege component as the default export from this file
export default Messege;
```

4. Import `Messege` to `App.tsx`;

**App.tsx**
```tsx
import Messege from "./messege";

function App() {
    return <div><Messege/></div>
}

export default App; // So , it can be used somewhere else.
```

5. Run it like this

  * Go to terminal (powershell)
  * Locate the file (cd filepath)
  * type `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypas'`
    > just for this terminal session, don’t block script files. Let me run what I want (like npm.ps1). I’m grown.”
  * then type `npm run dev`
  * Follow the `localhost` link
![RND](Images/JS/React/RunNpmDev.png)

### How does react work 
[Video : You won't understand it at first](https://youtu.be/7YhdqIR2Yzo)

--- 

### Creating a ListGroup component
1. First , we're gonna install `bootstrap`
  * powershell > Locate file > `npm install bootstrap@latest`

```
PS C:\Users\Abullah Al Mahmud\OneDrive\Desktop\Coding notes\first_react_app> npm install bootstrap@latest
>>

added 2 packages, and audited 193 packages in 31s

50 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

2. Now go to `main.tsx` 
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
We're gonna work on this
```tsx
import './index.css'
```
Replace with
```tsx
import 'bootstrap/dist/css/bootstrap.css'
```
**Before replacing**
![Img](Images/JS/React/Without_BS.png)

**After**
![Img](Images/JS/React/With_BS.png)

**I just opened a new file called `listGroup.tsx`**

**listGroup.tsx**
```tsx
function ListGroup(){
    return <h1>List Group</h1>;
}

export default ListGroup;
```

**App.tsx**
```tsx
import ListGroup from "./Components/listGroup"

function App() {
    return <div><ListGroup/></div>
}

export default App; // So , it can be used somewhere else.
```
**Localhost**

![image](Images/JS/React/localhost_list.png);

As we can see , the Header is live. Now we have to add a bootstrap list group.

**Go to ➡️** [Bootstrap listGroup](https://getbootstrap.com/docs/4.0/components/list-group/)
- Copy the code.
- Paste it into `listGroup.tsx` and modify it a bit. (Class -> className)

**Paste it and use prettier code formatter to format it (ctrl + shift + p > Search : format document > Choose prettier)**
```tsx
function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
}

export default ListGroup;
```

**Output**
![img](Images/JS/React/BSList.png)

### Fragment
```tsx
function ListGroup() {
  return (
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
}
```
What if , I want to add a heading on top .
```tsx
function ListGroup() {
  return (
    <h1>List</h1> // Here
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  );
}
```
> **Error : JSX expressions must have one parent element.ts(2657)**

Because you can’t return **two sibling JSX elements** without wrapping them in a **single parent**.

You’re doing this:

```tsx
return (
  <h1>List</h1>   ❌
  <ul>...</ul>     ❌
);
```

---

**✅ Fix:**

Wrap them with a parent — either a `<div>` or a `<fragment`:

```tsx
return (
  <div> // jsx can have only one root element.
    <h1>List</h1>
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
);
```

No more drama. JSX needs **one root element** — that’s the golden rule.

Let's use fragment on it
```tsx
import { Fragment } from "react";

function ListGroup() {
  return (
    <Fragment>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </Fragment>
  );
}

export default ListGroup;
```
**Or we can just do this**
```tsx
function ListGroup() {
  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </>
  );
}

export default ListGroup;
```
![img](Images/JS/React/fragment.png)

### Rendering list
What if we create an array an render it as a list in react.
```tsx
let array = [
  "Apple",
  "Banana",
  "Pineapple"
];

function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">

        {array.map(item => ( // Mapping each item as a `li`
          <li className="list-group-item">{item}</li>
        ))}
      
      </ul>
    </>
  );
}

export default ListGroup;
```
After running this , go to inspect
```
Error : 
react-dom-client.development.js:24027  Each child in a list should have a unique "key" prop.

Check the render method of `ListGroup`. See https://react.dev/link/warning-keys for more information.
```
**Each child in a list should have a unique "key" prop**

React uses the `key` prop to **track each item** in a list when updating the DOM.

If you don’t give a unique `key`, React can get confused during re-renders — like accidentally updating the wrong `<li>`, or messing up animations.

So when mapping, always do:

```tsx
array.map(item => (
  <li key={item}>{item}</li>
))
```

🔑 TL;DR: `key` helps React know **"which list item is which"** — so updates don’t go wonky.
![img](Images/JS/React/renderList.png)

### Conditional rendering
If the list is empty generate a messege.
```tsx
let array = ["Apple", "Banana", "Pineapple"];

function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        if(array.length == 0){<p>No items found</p>}
        {array.map(
          (
            item // Mapping each item as a `li`
          ) => (
            <li className="list-group-item">{item}</li>
          )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
```
💀💀💀

* JSX can’t handle `if () {}` directly inside return
* Use ternary or `&&` for conditional rendering [Visit GFG](https://www.geeksforgeeks.org/reactjs-conditional-rendering/)
* Always wrap mapped `<li>`s in a parent tag only **if** there's content

```tsx
let array = ["Apple", "Banana", "Pineapple", "Orange"];

function ListGroup() {
    return array.length === 0 ? (<p>No item found</p>):(
        <>
        <h1>List</h1>
        <ul className="list-group">
            {array.map(item => {
                return <li className="list-group-item" key={item}>{item}</li>
            })}
        </ul>
        </>
    );
}

export default ListGroup;
```
![img](Images/JS/React/noItem.png)

### Handling events
When we click on an item on the list , it should appear on the console.
```js
let array = ["Apple", "Banana", "Pineapple", "Orange"];

function ListGroup() {
  return array.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {array.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item}
              onClick={() => console.log(item)} // Added an onClick event
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
```
This React component `ListGroup` checks if the `array` is empty — if yes, it shows “No item found.” Otherwise, it displays a list of items like "Apple", "Banana", etc. Each item is rendered as a clickable `<li>`; when you click on one, it logs the item’s name (like `"Banana"`) to the browser console. So it's a simple interactive list with click feedback.

**What if we use `event` as a parameter of the arrow function inside the click event**
```js
onClick={(event) => console.log(event)} // log event
```
SyntheticBaseEvent = React’s custom, safe version of browser events.
It looks and behaves like a regular event, but it's Reactified.

```
SyntheticBaseEvent {
  _reactName: "onClick",
  _targetInst: null,
  type: "click",
  nativeEvent: PointerEvent,
  target: li.list-group-item,
  altKey: false,
  bubbles: true,
  button: 0,
  buttons: 0,
  cancelable: true,
  clientX: 195,
  clientY: 67,
  ctrlKey: false,
  currentTarget: null,
  defaultPrevented: false,
  detail: 1,
  eventPhase: 3,
  getModifierState: ƒ modifierStateGetter(keyArg),
  isDefaultPrevented: ƒ functionThatReturnsFalse(),
  isPropagationStopped: ƒ functionThatReturnsFalse(),
  isTrusted: true,
  metaKey: false,
  movementX: 0,
  movementY: 0,
  pageX: 195,
  pageY: 67,
  relatedTarget: null,
  screenX: 217,
  screenY: 201,
  shiftKey: false,
  target: li.list-group-item,
  timeStamp: 358644,
  type: "click",
  view: Window,
  [[Prototype]]: Object
}
```
> **You'll get a bigass object dump** in your console if you `console.log(event)` from an `onClick`.
> Don’t freak out — it’s just React being React. Scroll through that monster and you’ll find your treasure.

When building larger projects, defining functions like `onClick={() => console.log(item)}` directly inside JSX can clutter the code and hurt readability. To keep things clean and maintainable, it’s better to define such functions outside (or at least as a named function inside the component) and just reference them in the JSX.
```js
const handleClick = (event) => console.log(event);
```
> Warning : Parameter 'event' implicitly has an 'any' type.ts(7006)

That warning means TypeScript doesn’t know what type `event` is, so it assumes it's `any`, which defeats the purpose of using TypeScript. To fix it, you should **explicitly type the parameter**.
```js
// ✅ Importing MouseEvent type from React to explicitly type the event parameter
import type { MouseEvent } from "react";

let array = ["Apple", "Banana", "Pineapple", "Orange"];

// ✅ Explicitly typing the event parameter as MouseEvent fixes the TS(7006) warning
const handleClick = (event: MouseEvent) => console.log(event);

function ListGroup() {
  return array.length === 0 ? (
    <p>No item found</p>
  ) : (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {array.map((item) => {
          return (
            <li
              className="list-group-item"
              key={item}
              // ✅ Passing the typed handler here ensures proper type inference for the event
              onClick={handleClick}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
```