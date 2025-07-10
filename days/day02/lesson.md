# Day 2: Variables (var, let, const)

## Objectives
- Understand what variables are in JavaScript
- Learn the difference between `var`, `let`, and `const`
- Practice declaring and using variables

## What is a Variable?
A variable stores data that can be used and changed in your program. Think of it as a labeled box for information.

## Declaring Variables
- `var` — Old way, function-scoped
- `let` — Modern way, block-scoped (recommended)
- `const` — Block-scoped, cannot be reassigned

## Examples
```js
var name = 'Ali';
let age = 25;
const country = 'Pakistan';
```

- Use `let` for values that will change
- Use `const` for values that should not change

## Rules
- Variable names are case-sensitive
- Cannot start with a number
- Use camelCase: `userName`, `totalPrice`

---

## Pro Tip
Always prefer `let` and `const` in modern JavaScript. Avoid `var` unless needed for legacy code.

---

**Next:** Practice declaring variables in the exercise!
