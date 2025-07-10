const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('button[data-op]');

function calculate(op) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = 'Result: Please enter valid numbers.';
    return;
  }
  let result;
  switch (op) {
    case 'add': result = a + b; break;
    case 'subtract': result = a - b; break;
    case 'multiply': result = a * b; break;
    case 'divide':
      if (b === 0) {
        resultDiv.textContent = 'Result: Cannot divide by zero!';
        return;
      }
      result = a / b; break;
  }
  resultDiv.textContent = 'Result: ' + result;
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => calculate(btn.dataset.op));
});
