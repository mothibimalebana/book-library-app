const getGenres = async (req, res) => {
    res.send("Display all Genres from database")
}
const getGenre = async (req, res) => {
    res.send("Display single Genre page")
}
const getGenreForm = (req, res) => {
    res.send("Form will be displayed here")
}
const postGenreForm = (req, res) => {
    res.send("Genre has been uploaded")
}
const deleteGenre = (req, res) => {
    res.send("Genre has been deleted")
}

module.exports = {
    getGenres,
    getGenre,
    getGenreForm,
    postGenreForm,
    deleteGenre,
}