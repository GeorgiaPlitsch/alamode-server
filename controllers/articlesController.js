const Articles = require("../models/Articles");

const getArticles = (req, res) => {
  const foundArticles = Articles.getArticles();
  if (foundarticles) {
    res.status(200).json(foundArticles);
  } else {
    res.status(400).json({ errorMessage: `Articles not found` });
  }
};

module.exports = {
  getArticles,
};
