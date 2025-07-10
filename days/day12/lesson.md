# Day 12: Arrow Functions

## Objectives
- Learn the syntax of arrow functions
- Understand differences from regular functions

## Arrow Function Syntax
```js
// Regular function
function add(a, b) {
  return a + b;
}
// Arrow function
const add = (a, b) => {
  return a + b;
};
// Short form (if only one expression)
const square = x => x * x;
```

## Differences
- Arrow functions do NOT have their own `this`
- Cannot be used as constructors
- Shorter syntax for simple functions

---

## Pro Tip
Use arrow functions for callbacks and short functions. Use regular functions if you need `this`.

---

**Next:** Practice arrow functions in the exercise!
