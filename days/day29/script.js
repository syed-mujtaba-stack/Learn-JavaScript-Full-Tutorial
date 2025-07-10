// Day 29: Promises Example
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('Success!'), 1000);
});
promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
