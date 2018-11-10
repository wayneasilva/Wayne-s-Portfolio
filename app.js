const express = require("express");
const app = express();
const fetch = require("fetch");

app.set("view engine", "ejs");
app.use(express.static("public"));

//ROUTES

//ROOT ROUTE
app.get("/", function(req, res) {
    res.render("index");
})

app.listen(3000);