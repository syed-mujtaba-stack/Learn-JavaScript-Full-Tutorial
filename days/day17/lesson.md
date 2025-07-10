# Day 17: Nested Objects & Arrays

## Objectives
- Learn how to work with objects inside arrays and arrays inside objects
- Access and update nested data

## Array of Objects
```js
let students = [
  { name: 'Ali', marks: 90 },
  { name: 'Sara', marks: 88 }
];
console.log(students[1].name); // 'Sara'
```

## Object with Array Property
```js
let classroom = {
  teacher: 'Mr. Khan',
  students: ['Ali', 'Sara', 'Ahmed']
};
console.log(classroom.students[0]); // 'Ali'
```

## Nested Objects
```js
let user = {
  name: 'Ali',
  address: {
    city: 'Lahore',
    zip: 54000
  }
};
console.log(user.address.city); // 'Lahore'
```

---

## Pro Tip
Use dot notation for nested objects and bracket notation for dynamic keys.

---

**Next:** Practice with nested objects/arrays in the exercise!
