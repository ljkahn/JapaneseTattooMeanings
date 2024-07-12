// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.
class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }

  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    );
  }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment(
  'Jane Doe',
  'This post is super cool!',
  '12/18/2021',
  '🐶😺'
);

// TODO: Create a new object using the BlogPost class constructor.
const newPost = new BlogPost(
  'John Doe',
  'My Third Post',
  'Both dogs and cats are super cute!',
  '12/17/2021'
);

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
newPost.addComment(newComment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
newPost.printMetaData();
newComment.printMetaData();
