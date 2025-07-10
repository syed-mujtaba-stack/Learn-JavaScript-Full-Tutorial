// Day 38: Higher-Order Functions Example
let nums = [1,2,3,4];
let squared = nums.map(x => x * x);
let greaterThan2 = nums.filter(x => x > 2);
let sum = nums.reduce((acc, x) => acc + x, 0);
console.log(squared); // [1, 4, 9, 16]
console.log(greaterThan2); // [3, 4]
console.log(sum); // 10
