# Day 7: Number & Math Methods

## Objectives
- Learn about JavaScript number methods and the Math object
- Practice common number and math operations

## Number Methods
- `.toFixed(n)` — rounds to n decimal places
- `.toString()` — converts number to string
- `parseInt()`, `parseFloat()` — convert strings to numbers

## Math Object
- `Math.round(x)` — round to nearest integer
- `Math.floor(x)` — round down
- `Math.ceil(x)` — round up
- `Math.max(a, b, ...)`, `Math.min(a, b, ...)`
- `Math.random()` — random number between 0 and 1

## Example
```js
let n = 3.14159;
console.log(n.toFixed(2)); // '3.14'
console.log(parseInt('42')); // 42
console.log(Math.round(4.7)); // 5
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.random()); // e.g., 0.452
```

---

## Pro Tip
`Math.random()` is useful for games and random choices!

---

**Next:** Practice with number and math methods in the exercise!
