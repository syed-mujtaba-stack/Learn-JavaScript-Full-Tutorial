# Day 3: Data Types in JavaScript

## Objectives
- Understand JavaScript’s main data types
- Learn how to check a variable’s type
- Practice using different data types

## Main Data Types
- **String** — text: `'Hello'`, `"World"`
- **Number** — numeric values: `42`, `3.14`
- **Boolean** — true/false: `true`, `false`
- **Undefined** — a variable declared but not assigned
- **Null** — intentional empty value
- **Object** — collections of key-value pairs
- **Array** — ordered lists (a type of object)

## Example
```js
let name = 'Ali';          // String
let age = 25;              // Number
let isStudent = true;      // Boolean
let address;               // Undefined
let car = null;            // Null
let user = {name: 'Ali'};  // Object
let scores = [10, 20, 30]; // Array
```

## Checking Types
Use `typeof` to check a variable’s type:
```js
console.log(typeof age); // 'number'
console.log(typeof name); // 'string'
```

---

## Pro Tip
`typeof null` returns `'object'` (this is a historical bug in JS).

---

**Next:** Practice with data types in the exercise!
