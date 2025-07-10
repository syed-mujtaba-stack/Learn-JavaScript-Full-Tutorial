# Day 27: Fetch API (GET Requests)

## Objectives
- Learn how to fetch data from an API using JavaScript
- Understand the basics of asynchronous requests

## Fetching Data
```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

## How It Works
- `fetch` returns a Promise
- Use `.then()` to handle the response and data
- Use `.catch()` to handle errors

---

## Pro Tip
Always check the network tab in DevTools to debug API requests!

---

**Next:** Practice fetching data in the exercise!
