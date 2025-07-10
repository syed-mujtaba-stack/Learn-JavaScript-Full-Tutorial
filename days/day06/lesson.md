# Day 6: String Methods

## Objectives
- Learn common string methods in JavaScript
- Practice manipulating and analyzing strings

## Common String Methods
- `.length` — length of the string
- `.toUpperCase()` / `.toLowerCase()` — change case
- `.includes()` — check if substring exists
- `.indexOf()` — find position of substring
- `.slice(start, end)` — extract part
- `.replace(old, new)` — replace text

## Example
```js
let msg = 'JavaScript is awesome!';
console.log(msg.length); // 22
console.log(msg.toUpperCase()); // 'JAVASCRIPT IS AWESOME!'
console.log(msg.includes('Script')); // true
console.log(msg.indexOf('is')); // 11
console.log(msg.slice(0, 10)); // 'JavaScript'
console.log(msg.replace('awesome', 'powerful')); // 'JavaScript is powerful!'
```

---

## Pro Tip
Strings are immutable: methods return new strings, original is unchanged.

---

**Next:** Practice with string methods in the exercise!
