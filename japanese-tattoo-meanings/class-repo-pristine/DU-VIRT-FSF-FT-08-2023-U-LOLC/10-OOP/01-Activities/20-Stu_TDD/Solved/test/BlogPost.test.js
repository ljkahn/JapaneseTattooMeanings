const BlogPost = require('../lib/BlogPost.js');
const Comment = require('../lib/Comment.js');

describe('BlogPost', () => {
  // Test to verify that the BlogPost class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const blogpost = new BlogPost();

      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // Test to verify that authorName can be assigned.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'John Doe';
      const blogpost = new BlogPost(authorName);

      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // Test to verify that title can be assigned.
  describe('Initialize title', () => {
    it('should set title properly', () => {
      const title = 'My First Post';
      const blogpost = new BlogPost('John Doe', title);

      expect(blogpost.title).toBe(title);
    });
  });

  // Test to verify that text can be assigned.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'Dogs are super cute!';
      const blogpost = new BlogPost('John Doe', 'My First Post', text);

      expect(blogpost.text).toBe(text);
    });
  });

  // Test to verify that createdOn can be assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        createdOn
      );

      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // Test to verify the length of the blogpost array when initialized.
  describe('Initialize comments', () => {
    it('should create blogpost array with a length of 0', () => {
      const blogpost = new BlogPost();

      expect(blogpost.comments.length).toBe(0);
    });
  });

  // Test to verify that addComment() recieves comment data.
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      const blogpost = new BlogPost();
      const comment = new Comment();
      blogpost.addComment(comment);

      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
    });
  });

  // Test to verify that printMetaData() returns the correct data.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        '12/15/2021'
      );

      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});
