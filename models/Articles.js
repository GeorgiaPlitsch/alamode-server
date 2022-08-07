let articlesData = require("../data/articles.json");

class Articles {
  static getArticles = () => {
    return articlesData;
  };

  static getArticle = (articleId) => {
    const foundArticle = articlesData.find((article) => {
      return article.id === articleId;
    });
    return foundArticle;
  };
}
module.exports = Articles;
