// Day 19: Error Handling Example
try {
  JSON.parse('{name:Ali}');
} catch (e) {
  console.log('Invalid JSON');
} finally {
  console.log('Done');
}
