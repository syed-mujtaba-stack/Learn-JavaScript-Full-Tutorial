// Day 40: Regular Expressions Example
let digitRegex = /^\d+$/;
console.log(digitRegex.test('12345')); // true
console.log(digitRegex.test('abc123')); // false
let str = 'a b c';
let dashed = str.replace(/ /g, '-');
console.log(dashed); // 'a-b-c'
