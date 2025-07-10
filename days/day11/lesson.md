# Day 11: Scope & Hoisting

## Objectives
- Understand variable/function scope (global, function, block)
- Learn about hoisting in JavaScript

## Scope
- **Global Scope:** Declared outside any function/block, accessible everywhere
- **Function Scope:** Declared inside a function, accessible only within
- **Block Scope:** Declared with `let`/`const` inside `{}` (if, for, etc.)

```js
let a = 10; // global
function test() {
  let b = 20; // function scope
  if (true) {
    let c = 30; // block scope
  }
}
```

## Hoisting
- Variable and function declarations are "hoisted" (moved to the top of their scope)
- Only declarations are hoisted, not initializations

```js
console.log(x); // undefined
var x = 5;
```

---

## Pro Tip
`let` and `const` are not initialized until their line is run (temporal dead zone).

---

**Next:** Practice scope and hoisting in the exercise!
