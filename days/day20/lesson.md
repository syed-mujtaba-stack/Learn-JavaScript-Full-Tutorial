# Day 20: DOM Basics — Selecting Elements

## Objectives
- Understand what the DOM is
- Learn to select and manipulate elements using JavaScript

## What is the DOM?
The Document Object Model (DOM) is the structure of your HTML page as objects that JavaScript can read and change.

## Selecting Elements
- `document.getElementById('id')`
- `document.querySelector('selector')`
- `document.querySelectorAll('selector')`

## Example
```js
let heading = document.getElementById('main-title');
let btn = document.querySelector('.btn');
let items = document.querySelectorAll('li');
```

## Changing Content
```js
heading.textContent = 'New Title!';
btn.style.background = 'blue';
```

---

## Pro Tip
Use `console.dir(element)` to inspect all properties of a DOM element.

---

**Next:** Practice DOM selection in the exercise!
