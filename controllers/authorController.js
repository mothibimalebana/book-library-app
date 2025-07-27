const getAllAuthors = async (req, res) => {
    res.send("gets all authors");
}
const getAuthor = async (req, res) => {
    const { id } = req.body;
    res.send(`current author on display ${id}`);
}
const getAuthorForm = (req, res) => {
    res.send("return author form");
}
const postAuthorForm = async (req, res) => {
    res.send("upload an author")
}
const deleteAuthor = async (req, res) => {
    res.send("deleted author")
}

module.exports = {
    getAllAuthors,
    getAuthor,
    getAuthorForm,
    postAuthorForm,
    deleteAuthor
}