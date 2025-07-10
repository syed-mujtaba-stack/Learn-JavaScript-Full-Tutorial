// Day 15: Objects Example
let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};
console.log(car.brand, car.year);
car.color = 'white';
delete car.model;
console.log(car);
