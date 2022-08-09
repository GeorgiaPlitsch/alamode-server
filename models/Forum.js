let forumData = require("../data/forum.json");

class Forum {
  static getPosts = () => {
    return forumData;
  };

  static getPost = (forumPost) => {
    const foundPost = forumData.find((post) => {
      return post.id === forumPost;
    });
    return foundPost;
  };
}
module.exports = Forum;
