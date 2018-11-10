const htmlBar = document.querySelector("#html-skill-level");
const cssBar = document.querySelector("#css-skill-level");
const jsBar = document.querySelector("#js-skill-level");
const nodeBar = document.querySelector("#node-skill-level");
const pythonBar = document.querySelector("#python-skill-level");
const expressBar = document.querySelector("#express-skill-level");
const mongoBar = document.querySelector("#mongo-skill-level");

console.log(htmlBar);

//ADD EVENT LISTENERS

//HTML
htmlBar.addEventListener("mouseover", function() {
    htmlBar.style.backgroundColor = "red";
})

htmlBar.addEventListener("mouseout", function() {
    htmlBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//CSS
cssBar.addEventListener("mouseover", function() {
    cssBar.style.backgroundColor = "red";
})

cssBar.addEventListener("mouseout", function() {
    cssBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//JS
jsBar.addEventListener("mouseover", function() {
    jsBar.style.backgroundColor = "red";
})

jsBar.addEventListener("mouseout", function() {
    jsBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//NODE
nodeBar.addEventListener("mouseover", function() {
    nodeBar.style.backgroundColor = "red";
})

nodeBar.addEventListener("mouseout", function() {
    nodeBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//PYTHON
pythonBar.addEventListener("mouseover", function() {
    pythonBar.style.backgroundColor = "red";
})

pythonBar.addEventListener("mouseout", function() {
    pythonBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//EXPRESS
expressBar.addEventListener("mouseover", function() {
    expressBar.style.backgroundColor = "red";
})

expressBar.addEventListener("mouseout", function() {
    expressBar.style.backgroundColor = "rgb(21, 253, 79)";
})

//MONGO
mongoBar.addEventListener("mouseover", function() {
    mongoBar.style.backgroundColor = "red";
})

mongoBar.addEventListener("mouseout", function() {
    mongoBar.style.backgroundColor = "rgb(21, 253, 79)";
})