// Day 27: Fetch API Example
let btn = document.getElementById('fetchBtn');
btn.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
