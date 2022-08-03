const resultsRouter = require("express").Router();
const resultsController = require("../controllers/resultsController");

resultsRouter.get("/", resultsController.getResults);

module.exports = resultsRouter;
