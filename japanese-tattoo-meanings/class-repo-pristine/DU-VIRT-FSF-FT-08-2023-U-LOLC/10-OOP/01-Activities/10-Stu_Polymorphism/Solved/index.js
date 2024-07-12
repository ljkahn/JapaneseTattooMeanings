// TODO: Debug the code so that Comment shows the reaction emojis when its printMetaData() function is run.

class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }

  printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  }
}

class BlogPost extends ForumItem {
  constructor(authorName, title, text, createdOn) {
    super(authorName, text, createdOn);
    this.title = title;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }

  // We use method overriding to change the value of printMetaData for only instances of the Comment class constructor.
  printMetaData() {
    console.log(
      `Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`
    );
  }
}

const newPost = new BlogPost(
  'John Doe',
  'My Fourth Post',
  'Dogs, cats, and snakes are super cute!',
  '12/19/2021'
);

const newComment = new Comment(
  'Jane Doe',
  'This post is really awesome!',
  '12/20/2021',
  '🐶😺🐍'
);

newPost.printMetaData();
newComment.printMetaData();
