const Quiz = require("../models/Quiz.js");

const getScoredQuestions = (req, res) => {
  const foundQuestions = Quiz.getQuestions();
  if (foundQuestions) {
    res.status(200).json(foundQuestions);
  } else {
    res.status(400).json({ errorMessage: `Questions not found` });
  }
};

const getRecQuestions = (req, res) => {
  const foundQuestions = Quiz.getRecQuestions();
  if (foundQuestions) {
    res.status(200).json(foundQuestions);
  } else {
    res.status(400).json({ errorMessage: `Questions not found` });
  }
};

module.exports = {
  getScoredQuestions,
  getRecQuestions,
};
