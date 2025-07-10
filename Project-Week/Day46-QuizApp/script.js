const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Rome'],
    answer: 0
  },
  {
    question: 'Which language runs in the browser?',
    options: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 3
  },
  {
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets'],
    answer: 0
  }
];
let current = 0;
let score = 0;
const quizContainer = document.getElementById('quiz-container');
const scoreDiv = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

function showQuestion() {
  if (current >= questions.length) {
    quizContainer.innerHTML = `<h3>Quiz Complete!</h3>`;
    scoreDiv.textContent = `Your Score: ${score} / ${questions.length}`;
    restartBtn.style.display = 'inline-block';
    return;
  }
  const q = questions[current];
  quizContainer.innerHTML = `
    <div class="question">${q.question}</div>
    <div class="options">
      ${q.options.map((opt, i) => `<button onclick="answer(${i})">${opt}</button>`).join('')}
    </div>
  `;
  scoreDiv.textContent = `Score: ${score}`;
}

window.answer = function(idx) {
  if (idx === questions[current].answer) score++;
  current++;
  showQuestion();
};

restartBtn.addEventListener('click', () => {
  current = 0;
  score = 0;
  restartBtn.style.display = 'none';
  showQuestion();
});

showQuestion();
