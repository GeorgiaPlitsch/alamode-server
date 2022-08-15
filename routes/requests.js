const requestsRouter = require("express").Router();
const requestsController = require("../controllers/requestsController");

requestsRouter.post("/", requestsController.addFabricRequest);

module.exports = requestsRouter;
