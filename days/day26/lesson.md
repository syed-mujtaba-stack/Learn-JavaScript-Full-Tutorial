# Day 26: JSON & Data Serialization

## Objectives
- Learn what JSON is and how to use it in JavaScript
- Convert objects to JSON and back

## What is JSON?
- JavaScript Object Notation (JSON) is a lightweight data format
- Used for data exchange between client and server

## Converting to JSON
```js
let user = { name: 'Ali', age: 22 };
let jsonStr = JSON.stringify(user);
console.log(jsonStr); // '{"name":"Ali","age":22}'
```

## Parsing JSON
```js
let str = '{"name":"Sara","age":20}';
let obj = JSON.parse(str);
console.log(obj.name); // 'Sara'
```

---

## Pro Tip
Only valid JSON can be parsed! Keys and string values must use double quotes.

---

**Next:** Practice JSON serialization and parsing in the exercise!
