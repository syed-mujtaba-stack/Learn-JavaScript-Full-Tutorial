// Day 8: Control Flow Example
let score = 75;
if (score < 50) {
  console.log('Fail');
} else if (score < 80) {
  console.log('Pass');
} else {
  console.log('Excellent');
}
let grade = 'B';
switch(grade) {
  case 'A':
    console.log('Outstanding!');
    break;
  case 'B':
    console.log('Good job!');
    break;
  case 'C':
    console.log('Keep improving!');
    break;
  default:
    console.log('Invalid grade');
}
