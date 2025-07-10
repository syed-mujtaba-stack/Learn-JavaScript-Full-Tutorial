# Day 32: Classes & OOP

## Objectives
- Understand ES6 classes and basic object-oriented programming (OOP)
- Learn how to define and use classes, constructors, and methods

## Defining a Class
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```

## Creating Instances
```js
let dog = new Animal('Dog');
dog.speak(); // Dog makes a noise.
```

## Inheritance
```js
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
let pet = new Dog('Buddy');
pet.speak(); // Buddy barks.
```

---

## Pro Tip
Use `super()` in the subclass constructor to call the parent constructor.

---

**Next:** Practice classes and inheritance in the exercise!
