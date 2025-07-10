# Day 18: Date & Time

## Objectives
- Learn how to work with dates and times in JavaScript
- Use the `Date` object to get and format dates

## Creating Dates
```js
let now = new Date(); // current date and time
let birthday = new Date('2000-01-01');
```

## Getting Date Parts
```js
console.log(now.getFullYear()); // year
console.log(now.getMonth() + 1); // month (0-11)
console.log(now.getDate()); // day of month
console.log(now.getHours()); // hour
console.log(now.getMinutes()); // minute
```

## Formatting Dates
```js
let dateStr = now.toLocaleDateString();
let timeStr = now.toLocaleTimeString();
console.log(dateStr, timeStr);
```

---

## Pro Tip
Months are zero-indexed (January is 0, December is 11).

---

**Next:** Practice with dates and times in the exercise!
