const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.

  describe('Author Length', () => {
    it('should throw an error when the authorName length is less than 2', () => {
      const cb = () => new BlogPost('E');
      const err = new Error('Author must be at least 2 characters long.');

      expect(cb).toThrowError(err);
    });
  });

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.

  describe('Author Characters', () => {
    it('should throw an error when the authorName contains characters that are not letters, numbers, dashes, or underscores', () => {
      const cb = () => new BlogPost('johndoe!');
      const err = new Error(
        'Author must only contain letters, numbers, dashes, and underscores.'
      );

      expect(cb).toThrowError(err);
    });
  });
});
