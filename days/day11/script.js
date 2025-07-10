// Day 11: Scope & Hoisting Example
let a = 10;
function printA() {
  console.log(a);
}
printA();
function testScope() {
  let b = 20;
  console.log(b);
}
testScope();
// console.log(b); // Error
console.log(c); // undefined
var c = 5;
// console.log(d); // Error
let d = 7;
