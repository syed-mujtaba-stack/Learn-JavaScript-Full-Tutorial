// Day 23: Forms & Validation Example
let form = document.getElementById('myForm');
let nameInput = document.getElementById('name');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (nameInput.value === '') {
    alert('Name is required!');
  } else {
    alert('Form submitted!');
  }
});
