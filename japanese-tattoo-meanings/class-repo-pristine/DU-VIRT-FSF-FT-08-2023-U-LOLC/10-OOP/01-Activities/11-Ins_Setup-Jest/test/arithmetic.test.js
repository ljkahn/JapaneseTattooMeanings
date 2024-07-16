// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.sum(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that the difference does in fact return the difference between the two numbers.
  describe('difference', () => {
    it('should take two numbers find the difference', () => {
      const total = 0;
      const arithmetic = new Arithmetic();
      expect(arithmetic.difference(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that product does in fact return the two numbers multiplied together.
  describe('product', () => {
    it('should take two numbers and multiply them together', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.product(2, 2)).toEqual(total);
    });
  });
});

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that quotient does in fact return the quotient of the two numbers.
  describe('quotient', () => {
    it('should take two numbers and divide them', () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.quotient(2, 2)).toEqual(total);
    });
  });
});
