# Day 23: Forms & Validation

## Objectives
- Learn to handle form submissions with JavaScript
- Validate user input before processing

## Accessing Form Elements
```js
let form = document.querySelector('form');
let nameInput = document.getElementById('name');
```

## Listening for Submit
```js
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop default submit
  // Validate and process
});
```

## Basic Validation
```js
if (nameInput.value === '') {
  alert('Name is required!');
}
```

---

## Pro Tip
Always prevent default form submission to handle validation in JS.

---

**Next:** Practice form validation in the exercise!
