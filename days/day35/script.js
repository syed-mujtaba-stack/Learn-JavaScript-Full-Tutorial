// Day 35: Custom Errors Example
class NotNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotNumberError';
  }
}
function checkNumber(x) {
  if (typeof x !== 'number') {
    throw new NotNumberError('Input must be a number!');
  }
  return x;
}
try {
  checkNumber('abc');
} catch (e) {
  console.log(e.name + ':', e.message);
}
