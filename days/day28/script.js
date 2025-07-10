// Day 28: Fetch POST Example
let btn = document.getElementById('postBtn');
btn.addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Test', body: 'Hello World' })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.id);
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
