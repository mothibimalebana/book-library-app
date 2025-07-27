const getBooks = async (req, res) => {
    res.send("Display all books from database")
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