// Day 14: Array Methods Example
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
let evens = numbers.filter(n => n % 2 === 0);
let firstGt3 = numbers.find(n => n > 3);
let hasFour = numbers.includes(4);
console.log('Squares:', squares);
console.log('Evens:', evens);
console.log('First > 3:', firstGt3);
console.log('Includes 4:', hasFour);
