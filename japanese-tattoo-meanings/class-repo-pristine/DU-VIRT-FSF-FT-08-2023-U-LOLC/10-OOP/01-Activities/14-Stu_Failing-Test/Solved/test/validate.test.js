// TODO: Import the Validate class.

const Validate = require('../validate.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('Validate', () => {
  // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

  describe('invalid', () => {
    it('should return false for empty password', () => {
      const str = '';

      const result = new Validate().isPassword(str);

      expect(result).toEqual(false);
    });
  });
});
