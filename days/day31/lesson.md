# Day 31: ES6+ Features Overview

## Objectives
- Get familiar with modern JavaScript (ES6+) features
- Learn about let/const, template literals, destructuring, and more

## let & const
- `let` for block-scoped variables
- `const` for constants

## Template Literals
```js
let name = 'Ali';
console.log(`Hello, ${name}!`);
```

## Destructuring
```js
let [a, b] = [1, 2];
let {x, y} = {x: 3, y: 4};
```

## Spread & Rest
```js
let arr = [1, 2, 3];
let arr2 = [...arr, 4]; // Spread
function sum(...nums) { return nums.reduce((a,b)=>a+b); } // Rest
```

## Default Parameters
```js
function greet(name = 'Guest') { console.log(name); }
```

---

## Pro Tip
Use modern features to write cleaner, more readable code!

---

**Next:** Practice ES6+ features in the exercise!
