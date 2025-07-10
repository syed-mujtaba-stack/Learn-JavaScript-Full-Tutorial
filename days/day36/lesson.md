# Day 36: Callbacks

## Objectives
- Understand what callbacks are and why they’re useful
- Learn to use callbacks for asynchronous and event-based programming

## What is a Callback?
- A callback is a function passed as an argument to another function

## Example
```js
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}
greet('Ali', function() {
  console.log('Callback executed!');
});
```

## Asynchronous Callbacks
```js
setTimeout(function() {
  console.log('Runs after 1 second');
}, 1000);
```

---

## Pro Tip
Callbacks are the foundation of async code in JS—used in events, timers, and more.

---

**Next:** Practice callbacks in the exercise!
