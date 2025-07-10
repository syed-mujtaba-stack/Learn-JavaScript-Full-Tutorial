// Day 26: JSON Example
let user = { name: 'Ali', age: 22 };
let jsonStr = JSON.stringify(user);
console.log(jsonStr);
let obj = JSON.parse(jsonStr);
console.log(obj.name);
