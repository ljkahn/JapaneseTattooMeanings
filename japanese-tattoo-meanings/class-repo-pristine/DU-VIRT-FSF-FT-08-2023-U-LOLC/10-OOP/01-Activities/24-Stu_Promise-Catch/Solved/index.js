const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: Update the code below so that the exception is caught and a message is logged in the terminal.

// The string to readFile is intentionally incorrect to force the error.
readFile('./data/post.json', 'utf-8')
  .then((json) => {
    const blogData = JSON.parse(json);
    const post = new BlogPost(
      blogData.title,
      blogData.text,
      blogData.author,
      blogData.createdOn
    );
    const html = post.render();
    return writeFile('./dist/post.html', html);
  })
  .then(() => {
    console.log('Created post.html');
  })
  .catch((error) => {
    // Execution will jump to this callback function when an exception occurs in any of the previous promises in the
    // chain.
    console.log(error);
    console.log('Unable to read post data.');
  });
