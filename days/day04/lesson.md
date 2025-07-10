# Day 4: Type Conversion in JavaScript

## Objectives
- Understand implicit and explicit type conversion
- Learn to convert between strings, numbers, and booleans
- Practice type conversion in code

## Implicit Conversion
JavaScript sometimes converts types automatically (type coercion):
```js
console.log('5' + 2); // '52' (number 2 converted to string)
console.log('5' - 2); // 3   (string '5' converted to number)
```

## Explicit Conversion
You can convert types using built-in functions:
```js
let num = Number('10'); // 10
let str = String(123);  // '123'
let bool = Boolean(0);  // false
```

## Common Conversions
- `Number(value)` — to number
- `String(value)` — to string
- `Boolean(value)` — to boolean

---

## Pro Tip
Falsy values: `false`, `0`, `''`, `null`, `undefined`, `NaN` all become `false` when converted to boolean.

---

**Next:** Practice type conversion in the exercise!
