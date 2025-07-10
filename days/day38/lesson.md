# Day 38: Higher-Order Functions

## Objectives
- Understand what higher-order functions are
- Learn to use and create higher-order functions

## What is a Higher-Order Function?
- A function that takes another function as an argument or returns a function

## Examples: map, filter, reduce
```js
let nums = [1, 2, 3, 4];
let doubled = nums.map(x => x * 2); // [2, 4, 6, 8]
let evens = nums.filter(x => x % 2 === 0); // [2, 4]
let sum = nums.reduce((acc, x) => acc + x, 0); // 10
```

## Creating Your Own
```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // 0 1 2
```

---

## Pro Tip
Mastering higher-order functions is key for functional programming in JS!

---

**Next:** Practice higher-order functions in the exercise!
