# Day 19: Error Handling (try, catch)

## Objectives
- Understand how to handle errors in JavaScript
- Use `try`, `catch`, and `finally`

## try-catch
```js
try {
  // Code that may throw an error
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log('An error occurred:', error.message);
}
```

## finally
- The `finally` block runs whether or not there was an error.

```js
try {
  // ...
} catch (e) {
  // ...
} finally {
  console.log('This always runs');
}
```

## Throwing Errors
```js
throw new Error('Something went wrong');
```

---

## Pro Tip
Only use `try-catch` for code that might fail (e.g., parsing JSON, network requests).

---

**Next:** Practice error handling in the exercise!
