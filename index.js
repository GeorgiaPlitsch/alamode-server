require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fabricsRouter = require("./routes/fabrics.js");
const articlesRouter = require("./routes/articles.js");
const resultsRouter = require("./routes/results.js");
const quizRouter = require("./routes/quiz.js");
const forumRouter = require("./routes/forum.js");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("images"));

app.use("/api/fabrics", fabricsRouter);
app.use("/api/articles", articlesRouter);
app.use("/api/results", resultsRouter);
app.use("/api/quiz", quizRouter);
app.use("/api/forum", forumRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
