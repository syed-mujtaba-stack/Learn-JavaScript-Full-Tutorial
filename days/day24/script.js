// Day 24: Timers Example
let btn = document.getElementById('startBtn');
btn.addEventListener('click', function() {
  let count = 0;
  let timer = setInterval(function() {
    count++;
    console.log('Tick');
    if (count === 5) clearInterval(timer);
  }, 1000);
});
