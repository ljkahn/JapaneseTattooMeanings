const Comment = require('../lib/Comment.js');

describe('Comment', () => {
  // Test to verify that the Comment class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Comment class', () => {
      const comment = new Comment();

      expect(comment).toBeInstanceOf(Comment);
    });
  });

  // Test to verify that authorName can be assigned.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'Jane Doe';
      const comment = new Comment(authorName);

      expect(comment.authorName).toBe(authorName);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'This post is super cool!';
      const comment = new Comment('Jane Doe', text);

      expect(comment.text).toBe(text);
    });
  });

  // Test to verify that createdOn can be assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        createdOn
      );

      expect(comment.createdOn).toBe(createdOn);
    });
  });

  // Test to verify that reaction can be assigned.
  describe('Initialize reaction', () => {
    it('should set reaction properly', () => {
      const reaction = '🐶';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        reaction
      );

      expect(comment.reaction).toBe(reaction);
    });
  });

  // Test to verify that printMetaData() returns the correct data.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        '🐶'
      );

      expect(comment.printMetaData()).toBe(
        `Created by Jane Doe on 12/15/2021 🐶`
      );
    });
  });
});
