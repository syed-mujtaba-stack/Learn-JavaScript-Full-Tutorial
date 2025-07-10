// Day 34: Modules Example
// math.js
export function multiply(a, b) {
  return a * b;
}
// main.js
import { multiply } from './math.js';
console.log(multiply(3, 4));
