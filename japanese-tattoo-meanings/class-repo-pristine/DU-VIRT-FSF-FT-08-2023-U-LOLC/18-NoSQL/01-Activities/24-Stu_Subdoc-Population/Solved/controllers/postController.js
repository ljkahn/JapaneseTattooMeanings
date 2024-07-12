const { Post } = require('../models');

module.exports = {
  async getPosts(req, res) {
    try {
      const posts = await Post.find()
        .populate({ path: 'tags', select: '-__v' });

      res.json(posts);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async getSinglePost(req, res) {
    try {
      const post = await Post.findOne({ _id: req.params.postId })
        .populate({ path: 'tags', select: '-__v' });

      if (!post) {
        return res.status(404).json({ message: 'No post with that ID' });
      }

      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new post
  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
