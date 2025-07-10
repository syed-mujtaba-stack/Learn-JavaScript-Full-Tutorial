// Day 25: Local Storage Example
let saveBtn = document.getElementById('saveBtn');
let showBtn = document.getElementById('showBtn');
let input = document.getElementById('username');
saveBtn.addEventListener('click', function() {
  localStorage.setItem('username', input.value);
});
showBtn.addEventListener('click', function() {
  let user = localStorage.getItem('username');
  alert(user);
});
