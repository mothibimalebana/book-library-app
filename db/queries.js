const pool = require("./pool");

async function getAllBooks() {
    const { rows } = await pool.query("SELECT * FROM books");
    console.log(rows)
    return rows;
}

async function getBook(bookId) {
    const { book } = await pool.query(`SELECT * FROM books WHERE id = $1`,[bookId])
    return book;
}

async function insertBook(book) {
  await pool.query("INSERT INTO books (book) VALUES ($1)", [book]);
}

async function updateBook(book) {
  await pool.query("UPDATE books SET title = $1 WHERE book_id = $2")
}

async function deleteBook(bookId) {
  await pool.query("DELETE FROM books WHERE book_id = $1")
}

module.exports = {
  getAllBooks,
  getBook,
  insertBook,
  updateBook,
  deleteBook
};
