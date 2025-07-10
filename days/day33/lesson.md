# Day 33: Static Methods & Getters/Setters

## Objectives
- Learn about static methods and getter/setter properties in classes
- Understand how to use them for utility and encapsulation

## Static Methods
- Called on the class, not instances
```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5
```

## Getters & Setters
- Control access to properties
```js
class User {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name.toUpperCase();
  }
  set name(value) {
    this._name = value;
  }
}
let user = new User('Ali');
console.log(user.name); // 'ALI'
user.name = 'Sara';
console.log(user.name); // 'SARA'
```

---

## Pro Tip
Use an underscore (e.g. `_name`) for private-like properties by convention.

---

**Next:** Practice static methods and getters/setters in the exercise!
