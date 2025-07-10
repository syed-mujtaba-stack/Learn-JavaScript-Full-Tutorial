# Day 28: Fetch API (POST & Error Handling)

## Objectives
- Learn how to send data to an API using POST
- Handle errors and response codes

## Sending Data (POST)
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Hello', body: 'World' })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

## Checking Response Status
```js
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .catch(error => console.log(error));
```

---

## Pro Tip
Always check `response.ok` to handle HTTP errors gracefully.

---

**Next:** Practice POST requests and error handling in the exercise!
