const Quiz = require("../models/Quiz.js");

const getQuestions = (req, res) => {
  const foundQuestions = Quiz.getQuestions();
  if (foundQuestions) {
    res.status(200).json(foundQuestions);
  } else {
    res.status(400).json({ errorMessage: `Questions not found` });
  }
};

module.exports = {
  getQuestions,
};
