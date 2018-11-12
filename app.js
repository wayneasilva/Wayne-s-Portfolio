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

// app.listen(process.env.PORT, process.env.IP);
app.listen(3000);