require("dotenv").config()
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


app.listen(process.env.PORT, () => console.log(`Express app listening on port ${process.env.PORT}!`));