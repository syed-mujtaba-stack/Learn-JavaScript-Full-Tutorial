// Day 21: DOM Manipulation Example
let heading = document.getElementById('main-title');
heading.textContent = 'DOM Updated!';
let img = document.querySelector('img');
img.alt = 'Updated Image';
let list = document.querySelector('ul');
let newItem = document.createElement('li');
newItem.textContent = 'Item 3';
list.appendChild(newItem);
list.removeChild(list.firstElementChild);
