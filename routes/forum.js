const forumRouter = require("express").Router();
const forumController = require("../controllers/forumController");

forumRouter.get("/", forumController.getPosts);
forumRouter.get("/:forumPost", forumController.getPost);

module.exports = forumRouter;
