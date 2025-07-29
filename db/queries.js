const pool = require("./pool");

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM books");
  return rows;
}

async function insertBook(book) {
  await pool.query("INSERT INTO books (book) VALUES ($1)", [book]);
}

module.exports = {
  getAllBooks,
  insertBook,
};
