// Create a new Arithmetic class that behaves much like the previous demonstration.
class Arithmetic {
  constructor(num1, num2, operator) {

    // Checks to see that both numbers being passed in are of type number. If not, throw an error.
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      throw new Error('Please enter numbers for calculation');
    }
    
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
  }

  // A sum method that returns two numbers added together.
  sum() {
    return this.num1 + this.num2;
  };

  // A difference method that returns two numbers subtracted.
  difference() {
    return this.num1 - this.num2
  };

  // A product method that returns two numbers multiplied together.
  product() {
    return this.num1 * this.num2
  };

  // A quotient method that returns two numbers divided.
  quotient() {
    return this.num1 / this.num2
  };

  // A modulus method that currently doesn't do anything.
  modulus() {
    return this.num1 % this.num2
  };
};

module.exports = Arithmetic;
