// Day 22: Events Example
let btn = document.getElementById('myBtn');
btn.addEventListener('click', function() {
  alert('Button was clicked!');
});
let input = document.getElementById('myInput');
input.addEventListener('input', function() {
  console.log(input.value);
});
