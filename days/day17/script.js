// Day 17: Nested Objects & Arrays Example
let books = [
  { title: 'JS Basics', author: 'Ali' },
  { title: 'Advanced JS', author: 'Sara' }
];
console.log(books[1].author);
let library = {
  categories: ['Programming', 'Fiction']
};
console.log(library.categories[0]);
library.location = { city: 'Lahore', country: 'Pakistan' };
console.log(library.location.city);
