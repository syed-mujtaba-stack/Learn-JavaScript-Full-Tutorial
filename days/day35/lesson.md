# Day 35: Error Handling (Custom Errors)

## Objectives
- Learn how to create and throw custom errors
- Understand error types and best practices

## Throwing Custom Errors
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero!');
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log('Error:', e.message);
}
```

## Creating Custom Error Classes
```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

throw new ValidationError('Invalid input!');
```

---

## Pro Tip
Always extend the built-in `Error` class for custom errors.

---

**Next:** Practice custom error handling in the exercise!
