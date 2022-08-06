const quizRouter = require("express").Router();
const quizController = require("../controllers/quizController");

quizRouter.get("/scored", quizController.getScoredQuestions);
quizRouter.get("/rec", quizController.getRecQuestions);

module.exports = quizRouter;
