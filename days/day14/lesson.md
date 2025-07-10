# Day 14: Array Methods (map, filter, etc.)

## Objectives
- Use common array methods: `map`, `filter`, `forEach`, `find`, `includes`
- Practice transforming and searching arrays

## Common Array Methods
- `.forEach(fn)` — run a function for each item
- `.map(fn)` — create a new array by transforming each item
- `.filter(fn)` — create a new array with only items that pass a test
- `.find(fn)` — find first item that matches
- `.includes(value)` — check if value exists

## Example
```js
let nums = [1, 2, 3, 4, 5];
nums.forEach(n => console.log(n));
let squares = nums.map(n => n * n); // [1,4,9,16,25]
let evens = nums.filter(n => n % 2 === 0); // [2,4]
let found = nums.find(n => n > 3); // 4
console.log(nums.includes(3)); // true
```

---

## Pro Tip
Array methods do not change the original array (except forEach).

---

**Next:** Practice array methods in the exercise!
