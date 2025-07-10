# Day 39: Functional Programming Basics

## Objectives
- Learn the basics of functional programming (FP) in JavaScript
- Understand pure functions, immutability, and function composition

## Pure Functions
- Always return the same output for the same input
- No side effects
```js
function add(a, b) {
  return a + b;
}
```

## Immutability
- Do not modify original data
```js
let arr = [1,2,3];
let newArr = arr.concat(4); // arr is unchanged
```

## Function Composition
- Combine simple functions to build complex ones
```js
function double(x) { return x * 2; }
function square(x) { return x * x; }
function doubleThenSquare(x) { return square(double(x)); }
```

---

## Pro Tip
Use map, filter, and reduce for functional-style code!

---

**Next:** Practice functional programming in the exercise!
