const { Router } = require("express")
const bookRouter = Router()


bookRouter.get("/", (req, res) => {
    console.log("get all books")
    res.send("all books displayed here***")
})

module.exports = bookRouter