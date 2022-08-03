require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fabricsRouter = require("./routes/fabrics.js");
const articlesRouter = require("./routes/articles.js");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/fabrics", fabricsRouter);
app.use("/api/articles", articlesRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
