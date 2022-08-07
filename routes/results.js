const resultsRouter = require("express").Router();
const resultsController = require("../controllers/resultsController");

resultsRouter.get("/", resultsController.getResults);
resultsRouter.get("/:quizResult", resultsController.getResult);

module.exports = resultsRouter;
