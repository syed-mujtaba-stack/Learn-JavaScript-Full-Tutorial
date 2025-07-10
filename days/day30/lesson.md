# Day 30: Async/Await

## Objectives
- Understand how `async` and `await` simplify working with Promises
- Write cleaner asynchronous code

## Declaring an Async Function
```js
async function fetchData() {
  return 'Data!';
}
```

## Using Await
```js
async function getUser() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  let data = await response.json();
  console.log(data.name);
}
getUser();
```
- `await` pauses the function until the Promise resolves

---

## Pro Tip
Use try/catch inside async functions for error handling.

---

**Next:** Practice async/await in the exercise!
