const express = require("express")
const app = express()
const port = 3000
const wiki = require("./wiki.js")

app.use("/wiki", wiki)
app.get("/about", wiki)
app.get("/", function (req,res) {
    res.send("Hello World! (express)")
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
})