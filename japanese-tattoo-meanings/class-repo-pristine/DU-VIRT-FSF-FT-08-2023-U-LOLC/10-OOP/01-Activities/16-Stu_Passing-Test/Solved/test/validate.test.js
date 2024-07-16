const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.

  describe('Password Length', () => {
    it('should return false for password less than 8 characters long', () => {
      const validate = new Validate();
      const result = validate.isPassword('pass');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.

  describe('Password Uppercase', () => {
    it('should return false if the password does not contain at least 1 uppercase letter', () => {
      const validate = new Validate();
      const result = validate.isPassword('password123');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.

  describe('Password Lowercase', () => {
    it('should return false if the password does not contain at least 1 lowercase letter', () => {
      const validate = new Validate();
      const result = validate.isPassword('PASSWORD123');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.

  describe('Password Numbers', () => {
    it('should return false if the password does not contain at least 1 number', () => {
      const validate = new Validate();
      const result = validate.isPassword('password');

      expect(result).toEqual(false);
    });
  });

  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.

  describe('Password Valid', () => {
    it('should return true if password is at least 8 characters long and contains at least 1 uppercase, lowercase, and number', () => {
      const validate = new Validate();
      const result = validate.isPassword('Password123');

      expect(result).toEqual(true);
    });
  });
});
