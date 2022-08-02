const articlesRouter = require("express").Router();
const articlesController = require("../controllers/articlesController");

articlesRouter.get("/", articlesController.getArticles);

module.exports = articlesRouter;
