# Day 37: Closures

## Objectives
- Understand what closures are and how they work
- Learn practical uses for closures in JavaScript

## What is a Closure?
- A closure is a function that remembers its outer scope, even after the outer function has finished executing

## Example
```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

## Why Use Closures?
- Data privacy (encapsulation)
- Factory functions

---

## Pro Tip
Closures are everywhere in JS: event handlers, callbacks, and more!

---

**Next:** Practice closures in the exercise!
