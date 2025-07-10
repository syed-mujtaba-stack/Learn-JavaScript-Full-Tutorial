# Day 10: Functions — Declaration & Expression

## Objectives
- Learn how to declare and use functions
- Understand function expressions

## Function Declaration
```js
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('Ali');
```

## Function Expression
```js
const add = function(a, b) {
  return a + b;
};
console.log(add(2, 3)); // 5
```

## Why Functions?
- Reuse code
- Organize logic
- Make code easier to read and maintain

---

## Pro Tip
Function declarations are hoisted (can be called before they are defined). Expressions are not.

---

**Next:** Practice writing functions in the exercise!
