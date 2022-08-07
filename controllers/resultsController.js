const Results = require("../models/Results");

const getResults = (req, res) => {
  const foundResults = Results.getResults();
  if (foundResults) {
    res.status(200).json(foundResults);
  } else {
    res.status(400).json({ errorMessage: `Results not found` });
  }
};

const getResult = (req, res) => {
  const { quizResult } = req.params;
  const foundResult = Results.getResult(quizResult);
  if (foundResult) {
    res.status(200).json(foundResult);
  } else {
    res.status(400).json({ errorMessage: `Result not found` });
  }
};

module.exports = {
  getResults,
  getResult,
};
