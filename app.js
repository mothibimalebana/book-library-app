const express = require("express");
const app = express();
const bookRouter = require("./routes/bookRoutes");
const path = require("node:path");
const genreRouter = require("./routes/genreRoutes");
const authorRouter = require("./routes/authorRoutes");

//middleware and other ish...
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

//routers
app.use("/genre", genreRouter);
app.use("/author", authorRouter);
app.use("/", bookRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));