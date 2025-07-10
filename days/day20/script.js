// Day 20: DOM Basics Example
let heading = document.getElementById('main-title');
heading.textContent = 'DOM Manipulated!';
let btn = document.querySelector('.btn');
btn.style.background = 'green';
let items = document.querySelectorAll('li');
items.forEach(item => console.log(item.textContent));
