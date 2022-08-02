let articlesData = require("../data/articles.json");

class Articles {
  static getArticles = () => {
    return articlesData;
  };
}
module.exports = Articles;
