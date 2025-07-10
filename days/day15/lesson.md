# Day 15: Objects — Basics

## Objectives
- Understand objects and their role in JavaScript
- Learn how to create, access, and update objects

## What is an Object?
Objects store data as key-value pairs. Each value is accessed by its key (property name).

## Creating an Object
```js
let person = {
  name: 'Ali',
  age: 25,
  isStudent: true
};
```

## Accessing & Updating Properties
```js
console.log(person.name); // 'Ali'
person.age = 26;
person.city = 'Lahore'; // add new property
```

## Deleting Properties
```js
delete person.isStudent;
```

---

## Pro Tip
Keys are always strings (even if you don’t use quotes).

---

**Next:** Practice with objects in the exercise!
