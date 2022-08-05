const quizRouter = require("express").Router();
const quizController = require("../controllers/quizController");

quizRouter.get("/", quizController.getQuestions);

module.exports = quizRouter;
