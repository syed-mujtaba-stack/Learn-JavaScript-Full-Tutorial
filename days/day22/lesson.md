# Day 22: Events & Event Listeners

## Objectives
- Learn how to handle user events (click, input, etc.)
- Use `addEventListener` to respond to events

## Adding Event Listeners
```js
let btn = document.querySelector('button');
btn.addEventListener('click', function() {
  alert('Button clicked!');
});
```

## Common Events
- `click` — mouse click
- `input` — user types in a field
- `mouseover` — mouse hovers
- `keydown` — key pressed

## Removing Event Listeners
```js
function sayHi() { alert('Hi!'); }
btn.addEventListener('click', sayHi);
btn.removeEventListener('click', sayHi);
```

---

## Pro Tip
Use named functions if you want to remove an event listener later.

---

**Next:** Practice handling events in the exercise!
