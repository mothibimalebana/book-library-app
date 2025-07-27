const { Router } = require("express")
const { getGenre, getGenres, getGenreForm, postGenreForm, deleteGenre } = require("../controllers/genreController")
const genreRouter = Router()

genreRouter.get("/", getGenres);
genreRouter.get("/create", getGenreForm);
genreRouter.post("/create", postGenreForm);
genreRouter.get("/:id", getGenre);
genreRouter.delete("/:id", deleteGenre);


module.exports = genreRouter