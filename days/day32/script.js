// Day 32: Classes Example
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}
let user = new Person('Ali');
user.greet();
