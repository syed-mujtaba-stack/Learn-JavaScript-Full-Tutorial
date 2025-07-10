# Day 29: Promises

## Objectives
- Understand what Promises are and why they are used
- Learn to create and use Promises in JavaScript

## What is a Promise?
- A Promise represents a value that may be available now, later, or never
- Used for asynchronous operations (like API calls)

## Creating a Promise
```js
let promise = new Promise(function(resolve, reject) {
  let success = true;
  if (success) {
    resolve('It worked!');
  } else {
    reject('It failed!');
  }
});
```

## Consuming a Promise
```js
promise.then(
  result => console.log(result),
  error => console.log(error)
);
```

---

## Pro Tip
Use `.catch()` to handle errors and `.finally()` to run code after a promise settles.

---

**Next:** Practice with Promises in the exercise!
