# Day 21: DOM Manipulation

## Objectives
- Learn how to change HTML content and attributes using JavaScript
- Practice adding, removing, and updating elements

## Changing Content
```js
let heading = document.getElementById('main-title');
heading.textContent = 'Updated Title!';
```

## Changing Attributes
```js
let img = document.querySelector('img');
img.src = 'new-image.jpg';
img.alt = 'New description';
```

## Adding/Removing Elements
```js
let list = document.querySelector('ul');
let newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem); // Add
list.removeChild(list.firstElementChild); // Remove first
```

---

## Pro Tip
Use `classList.add()` and `classList.remove()` to manage CSS classes.

---

**Next:** Practice DOM manipulation in the exercise!
