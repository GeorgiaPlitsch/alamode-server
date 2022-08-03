const Results = require("../models/Results");

const getResults = (req, res) => {
  const foundResults = Results.getResults();
  if (foundResults) {
    res.status(200).json(foundResults);
  } else {
    res.status(400).json({ errorMessage: `Results not found` });
  }
};

module.exports = {
  getResults,
};
