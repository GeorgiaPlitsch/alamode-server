let quizScoredData = require("../data/quiz/quizQuestionsScored.json");
let quizRecData = require("../data/quiz/quizQuestionsReccomendations.json");

class Quiz {
  static getScoredQuestions = () => {
    return quizScoredData;
  };

  static getRecQuestions = () => {
    return quizRecData;
  };
}
module.exports = Quiz;
