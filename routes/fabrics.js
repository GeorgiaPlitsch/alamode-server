const fabricsRouter = require("express").Router();
const fabricsController = require("../controllers/fabricsController");

fabricsRouter.get("/", fabricsController.getFabrics);

module.exports = fabricsRouter;
