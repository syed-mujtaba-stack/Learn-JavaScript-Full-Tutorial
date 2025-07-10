// Day 36: Callbacks Example
function process(num, callback) {
  let result = num * 2;
  callback(result);
}
process(5, function(res) {
  console.log(res);
});
