# Day 24: Timers (setTimeout, setInterval)

## Objectives
- Learn to use `setTimeout` and `setInterval` for timing events
- Practice creating delays and repeated actions

## setTimeout
Runs a function once after a delay (ms):
```js
setTimeout(function() {
  alert('Hello after 2 seconds!');
}, 2000);
```

## setInterval
Runs a function repeatedly at intervals (ms):
```js
let count = 0;
let timer = setInterval(function() {
  count++;
  console.log('Count:', count);
  if (count === 5) clearInterval(timer);
}, 1000);
```

---

## Pro Tip
Use `clearTimeout` and `clearInterval` to stop timers.

---

**Next:** Practice with timers in the exercise!
