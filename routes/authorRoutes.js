const { Router } = require("express");
const { getAuthor, getAllAuthors, getAuthorForm, postAuthorForm, deleteAuthor } = require("../controllers/authorController");
const authorRouter = Router()

authorRouter.get("/", getAllAuthors);
authorRouter.get("/:id", getAuthor);
authorRouter.get("/create", getAuthorForm);
authorRouter.post("/create", postAuthorForm);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter