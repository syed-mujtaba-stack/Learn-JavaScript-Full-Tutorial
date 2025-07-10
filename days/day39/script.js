// Day 39: Functional Programming Example
function multiply(a, b) { return a * b; }
let arr = [2,4,6];
let doubled = arr.map(x => x * 2);
function double(x) { return x * 2; }
function square(x) { return x * x; }
function doubleThenSquare(x) { return square(double(x)); }
console.log(multiply(2, 3)); // 6
console.log(doubled); // [4, 8, 12]
console.log(doubleThenSquare(3)); // 36
