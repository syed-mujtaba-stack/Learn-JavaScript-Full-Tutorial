# Day 16: Object Methods & `this`

## Objectives
- Learn how to add methods (functions) to objects
- Understand how `this` works in object methods

## Adding Methods
```js
let user = {
  name: 'Ali',
  greet: function() {
    console.log('Hello, ' + this.name + '!');
  }
};
user.greet(); // Hello, Ali!
```

## The `this` Keyword
- Refers to the object the method belongs to
- Allows methods to access other properties in the same object

## Shorthand Syntax (ES6)
```js
let car = {
  brand: 'Toyota',
  show() {
    console.log(this.brand);
  }
};
car.show();
```

---

## Pro Tip
Arrow functions do NOT have their own `this` — use regular functions for object methods.

---

**Next:** Practice object methods in the exercise!
