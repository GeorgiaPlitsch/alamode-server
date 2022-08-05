let quizData = require("../data/quiz/quizQuestionsScored.json");

class Quiz {
  static getQuestions = () => {
    return quizData;
  };
}
module.exports = Quiz;
