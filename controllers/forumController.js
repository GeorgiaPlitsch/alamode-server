const Forum = require("../models/Forum");

const getPosts = (req, res) => {
  const foundPosts = Forum.getPosts();
  if (foundPosts) {
    res.status(200).json(foundPosts);
  } else {
    res.status(400).json({ errorMessage: `Posts not found` });
  }
};

const getPost = (req, res) => {
  const { forumPost } = req.params;
  const foundPost = Forum.getPost(forumPost);
  if (foundPost) {
    res.status(200).json(foundPost);
  } else {
    res.status(400).json({ errorMessage: `Post not found` });
  }
};

module.exports = {
  getPosts,
  getPost,
};
