const binarySearch = require('../index');

test('binarySearch is a defined function', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('binarySearch should return the index of the given element', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 7)).toEqual(6);
});

test('binarySearch should return -1 because 5643 is not in the array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 5643)).toEqual(-1);
});

test('binarySearch should return the index of the given element', () => {
  let testArray = [23, 67, 98, 102, 456];
  expect(binarySearch(testArray, 102)).toEqual(3);
});
