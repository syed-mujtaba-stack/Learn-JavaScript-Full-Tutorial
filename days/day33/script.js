// Day 33: Static Methods & Getters/Setters Example
class Calculator {
  constructor() {
    this._result = 0;
  }
  static multiply(a, b) {
    return a * b;
  }
  get result() {
    return this._result;
  }
}
let calc = new Calculator();
calc._result = Calculator.multiply(4, 5);
console.log(calc.result); // 20
