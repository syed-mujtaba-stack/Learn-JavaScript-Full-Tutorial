# Day 40: Regular Expressions (Regex)

## Objectives
- Learn what regular expressions are and how to use them in JavaScript
- Practice pattern matching and validation

## What is a Regular Expression?
- A pattern used to match character combinations in strings

## Creating a Regex
```js
let regex = /hello/i; // case-insensitive
let str = 'Hello world';
console.log(regex.test(str)); // true
```

## Matching and Replacing
```js
let email = 'test@mail.com';
let pattern = /\w+@\w+\.\w+/;
console.log(pattern.test(email)); // true
let result = email.replace(/mail/, 'gmail');
console.log(result); // 'test@gmail.com'
```

---

## Pro Tip
Use regex for validation, searching, and replacing text efficiently!

---

**Next:** Practice regex in the exercise!
