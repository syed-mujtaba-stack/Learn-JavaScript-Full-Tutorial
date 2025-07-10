// Day 37: Closures Example
function createAdder(x) {
  return function(y) {
    return x + y;
  }
}
let add3 = createAdder(3);
console.log(add3(10)); // 13
