const db = require('../db/queries')

const getBooks = async (req, res) => {
    const books = await db.getAllBooks();
    console.log("books: ", books);
    res.send("Book: " + books.map((book) => book.title));
}
const getBook = async (req, res) => {
    res.send("Display single book page")
}
const getBookForm = (req, res) => {
    res.send("Form will be displayed here")
}
const postBookForm = (req, res) => {
    res.send("Book has been uploaded")
}
const deleteBook = (req, res) => {
    res.send("Book has been deleted")
}

module.exports = {
    getBooks,
    getBook,
    getBookForm,
    postBookForm,
    deleteBook,
}