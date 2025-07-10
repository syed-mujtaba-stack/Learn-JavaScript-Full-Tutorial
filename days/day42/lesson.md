# Day 42: Debugging & DevTools

## Objectives
- Learn how to debug JavaScript code effectively
- Use browser DevTools for inspecting, breakpoints, and logging

## Using console.log
- Print variables and messages to the console for quick checks

## Breakpoints
- Pause code execution at a specific line in DevTools (Sources tab)

## Inspecting Variables
- Use the "Scope" panel to see current variable values

## Call Stack
- See the sequence of function calls leading to the current line

## Example
```js
function add(a, b) {
  debugger; // triggers a breakpoint
  return a + b;
}
add(2, 3);
```

---

## Pro Tip
Use `console.table()` for easy-to-read tables and `debugger;` to pause code!

---

**Next:** Practice debugging in the exercise!
