let resultsData = require("../data/results.json");

class Results {
  static getResults = () => {
    return resultsData;
  };
}
module.exports = Results;
