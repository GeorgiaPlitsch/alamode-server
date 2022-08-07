const articlesRouter = require("express").Router();
const articlesController = require("../controllers/articlesController");

articlesRouter.get("/", articlesController.getArticles);
articlesRouter.get("/:articleId", articlesController.getArticle);

module.exports = articlesRouter;
