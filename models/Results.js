let resultsData = require("../data/results.json");

class Results {
  static getResults = () => {
    return resultsData;
  };

  static getResult = (quizResult) => {
    const foundResult = resultsData.find((result) => {
      return result.id === quizResult;
    });
    return foundResult;
  };
}
module.exports = Results;
