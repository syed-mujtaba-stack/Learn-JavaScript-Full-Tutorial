# Day 8: Control Flow — if, else, switch

## Objectives
- Use `if`, `else if`, and `else` statements
- Use `switch` for multiple conditions

## if, else if, else
```js
let age = 18;
if (age < 13) {
  console.log('Child');
} else if (age < 20) {
  console.log('Teenager');
} else {
  console.log('Adult');
}
```

## switch Statement
```js
let color = 'green';
switch(color) {
  case 'red':
    console.log('Stop!');
    break;
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Unknown color');
}
```

---

## Pro Tip
Use `switch` when you have many specific values to check.

---

**Next:** Practice control flow in the exercise!
