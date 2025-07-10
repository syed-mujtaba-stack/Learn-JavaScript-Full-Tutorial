# Day 41: The Event Loop & Concurrency

## Objectives
- Understand how JavaScript handles asynchronous code
- Learn about the event loop, call stack, and task queue

## The Call Stack
- Where JS keeps track of function calls

## The Event Loop
- Handles execution of asynchronous code (timers, promises, events)

## Example
```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
// Output: Start, End, Promise, Timeout
```

## How It Works
- Synchronous code runs first
- Microtasks (promises) run before macrotasks (timers)

---

## Pro Tip
Use DevTools' "Call Stack" and "Async" features to debug async code!

---

**Next:** Practice event loop concepts in the exercise!
