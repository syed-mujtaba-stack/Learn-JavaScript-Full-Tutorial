// Day 30: Async/Await Example
async function waitOneSecond() {
  return new Promise(resolve => setTimeout(() => resolve('Done!'), 1000));
}
waitOneSecond().then(result => console.log(result));
