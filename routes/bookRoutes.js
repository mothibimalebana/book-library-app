const { Router } = require("express")
const { getBook, getBooks, getBookForm, postBookForm } = require("../controllers/bookController")
const bookRouter = Router()

bookRouter.get("/", getBooks);
bookRouter.get("/create", getBookForm);
bookRouter.post("/create", postBookForm);
bookRouter.get("/:id", getBook);


module.exports = bookRouter