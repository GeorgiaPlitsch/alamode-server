const Requests = require("../models/Requests");

const addFabricRequest = (req, res) => {
  const { request } = req.body;
  res.status(201).json(Requests.addFabricRequest(request));
};

module.exports = {
  addFabricRequest,
};
