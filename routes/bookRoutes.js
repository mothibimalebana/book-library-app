const { Router } = require("express")
const { getBook, getBooks, getBookForm, postBookForm, deleteBook } = require("../controllers/bookController")
const bookRouter = Router()

bookRouter.get("/", getBooks);
bookRouter.get("/create", getBookForm);
bookRouter.post("/create", postBookForm);
bookRouter.get("/:bookId", getBook);
bookRouter.delete("/:bookId", deleteBook);

module.exports = bookRouter