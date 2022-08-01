const fabricsRouter = require("express").Router();
const fabricsController = require("../controllers/fabricsController");

fabricsRouter.get("/", fabricsController.getFabrics);
fabricsRouter.get("/:fabricName", fabricsController.getFabricInfo);
fabricsRouter.get("/names", fabricsController.getFabricNames);

module.exports = fabricsRouter;
