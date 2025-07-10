# Day 9: Loops — for, while, break, continue

## Objectives
- Use `for` and `while` loops
- Understand `break` and `continue`

## for Loop
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## while Loop
```js
let n = 1;
while (n <= 5) {
  console.log(n);
  n++;
}
```

## break and continue
- `break` exits the loop early
- `continue` skips to the next iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop at 5
  console.log(i);
}
```

---

## Pro Tip
Use loops to process arrays and repeat actions efficiently.

---

**Next:** Practice loops in the exercise!
