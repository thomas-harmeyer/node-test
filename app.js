const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hello world");
});

const port = process.env.port || 8081;
app.listen(port, () => {
    console.log("hit");
});