# Day 13: Arrays — Basics

## Objectives
- Understand what arrays are
- Learn how to create and use arrays
- Access, update, and add array elements

## Creating Arrays
```js
let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4, 5];
```

## Accessing & Updating Elements
```js
console.log(fruits[0]); // 'apple'
fruits[1] = 'orange';
```

## Adding & Removing Elements
```js
fruits.push('grape'); // add to end
fruits.pop();         // remove from end
fruits.unshift('kiwi'); // add to start
fruits.shift();         // remove from start
```

## Array Length
```js
console.log(fruits.length);
```

---

## Pro Tip
Arrays in JS are zero-indexed (first element is at index 0).

---

**Next:** Practice with arrays in the exercise!
