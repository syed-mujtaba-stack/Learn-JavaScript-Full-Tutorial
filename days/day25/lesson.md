# Day 25: Local Storage & Session Storage

## Objectives
- Learn how to store data in the browser
- Use `localStorage` and `sessionStorage`

## localStorage
- Data is saved even after closing the browser/tab
```js
localStorage.setItem('username', 'Ali');
let user = localStorage.getItem('username');
console.log(user); // 'Ali'
```

## sessionStorage
- Data is cleared when the tab is closed
```js
sessionStorage.setItem('theme', 'dark');
let theme = sessionStorage.getItem('theme');
console.log(theme); // 'dark'
```

## Removing Data
```js
localStorage.removeItem('username');
localStorage.clear(); // removes all
```

---

## Pro Tip
All data is stored as strings! Use `JSON.stringify`/`JSON.parse` for objects.

---

**Next:** Practice localStorage and sessionStorage in the exercise!
