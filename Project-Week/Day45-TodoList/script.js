const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks') || '[]');
}
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function renderTasks() {
  const tasks = getTasks();
  taskList.innerHTML = '';
  tasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.classList.add('completed');
    li.addEventListener('click', () => toggleTask(idx));
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(idx);
    });
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const tasks = getTasks();
  tasks.push({ text, completed: false });
  saveTasks(tasks);
  taskInput.value = '';
  renderTasks();
}
function toggleTask(idx) {
  const tasks = getTasks();
  tasks[idx].completed = !tasks[idx].completed;
  saveTasks(tasks);
  renderTasks();
}
function deleteTask(idx) {
  const tasks = getTasks();
  tasks.splice(idx, 1);
  saveTasks(tasks);
  renderTasks();
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
renderTasks();
