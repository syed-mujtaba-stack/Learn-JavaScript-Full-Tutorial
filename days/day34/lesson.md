# Day 34: Modules (import/export)

## Objectives
- Learn how to split code into multiple files (modules)
- Use `export` and `import` statements

## Exporting
```js
// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;
```

## Importing
```js
// main.js
import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI);
```

## Default Export
```js
// greet.js
export default function greet() {
  console.log('Hello!');
}
// main.js
import greet from './greet.js';
greet();
```

---

## Pro Tip
Use modules to organize code and avoid polluting the global scope.

---

**Next:** Practice ES6 modules in the exercise!
