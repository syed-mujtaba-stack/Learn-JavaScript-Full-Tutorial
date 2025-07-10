const amountInput = document.getElementById('amountInput');
const descInput = document.getElementById('descInput');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalDiv = document.getElementById('total');

function getExpenses() {
  return JSON.parse(localStorage.getItem('expenses') || '[]');
}
function saveExpenses(expenses) {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}
function renderExpenses() {
  const expenses = getExpenses();
  expenseList.innerHTML = '';
  let total = 0;
  expenses.forEach((expense, idx) => {
    total += expense.amount;
    const li = document.createElement('li');
    li.textContent = `${expense.amount} - ${expense.desc}`;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => deleteExpense(idx));
    li.appendChild(delBtn);
    expenseList.appendChild(li);
  });
  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}
function addExpense() {
  const amount = parseFloat(amountInput.value);
  const desc = descInput.value.trim();
  if (!amount || !desc) return;
  const expenses = getExpenses();
  expenses.push({ amount, desc });
  saveExpenses(expenses);
  amountInput.value = '';
  descInput.value = '';
  renderExpenses();
}
function deleteExpense(idx) {
  const expenses = getExpenses();
  expenses.splice(idx, 1);
  saveExpenses(expenses);
  renderExpenses();
}
addExpenseBtn.addEventListener('click', addExpense);
renderExpenses();
