const fabricsRouter = require("express").Router();
const fabricsController = require("../controllers/fabricsController");

fabricsRouter.get("/", fabricsController.getFabrics);
fabricsRouter.get("/:fabricId", fabricsController.getFabricInfo);

module.exports = fabricsRouter;
