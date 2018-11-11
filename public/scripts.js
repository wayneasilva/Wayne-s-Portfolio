const htmlBar = document.querySelector("#html-skill-level");
const cssBar = document.querySelector("#css-skill-level");
const jsBar = document.querySelector("#js-skill-level");
const nodeBar = document.querySelector("#node-skill-level");
const pythonBar = document.querySelector("#python-skill-level");
const expressBar = document.querySelector("#express-skill-level");
const mongoBar = document.querySelector("#mongo-skill-level");

const colors =  [
                    "rgb(255, 60, 0)",
                    "rgb(21, 122, 253)",
                    "rgb(253, 249, 21)",
                    "rgb(83, 255, 126)",
                    "rgb(255, 252, 53)",
                    "rgb(121, 73, 255)",
                    "rgb(52, 202, 89)"
                ];
console.log(htmlBar);

//ADD EVENT LISTENERS

//HTML
htmlBar.addEventListener("mouseover", function() {
    htmlBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[6];
    cssBar.style.backgroundColor = colors[0]
    jsBar.style.backgroundColor = colors[1];
    nodeBar.style.backgroundColor = colors[2];
    pythonBar.style.backgroundColor = colors[3];
    expressBar.style.backgroundColor = colors[4];
    mongoBar.style.backgroundColor =  colors[5];
})

htmlBar.addEventListener("mouseout", function() {
    htmlBar.classList.remove("scaleUp");
})

//CSS
cssBar.addEventListener("mouseover", function() {
    cssBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[5];
    cssBar.style.backgroundColor = colors[6]
    jsBar.style.backgroundColor = colors[0];
    nodeBar.style.backgroundColor = colors[2];
    pythonBar.style.backgroundColor = colors[2];
    expressBar.style.backgroundColor = colors[3];
    mongoBar.style.backgroundColor =  colors[4];
})

cssBar.addEventListener("mouseout", function() {
    cssBar.classList.remove("scaleUp");
})

//JS
jsBar.addEventListener("mouseover", function() {
    jsBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[4];
    cssBar.style.backgroundColor = colors[5]
    jsBar.style.backgroundColor = colors[6];
    nodeBar.style.backgroundColor = colors[0];
    pythonBar.style.backgroundColor = colors[1];
    expressBar.style.backgroundColor = colors[2];
    mongoBar.style.backgroundColor =  colors[3];
})

jsBar.addEventListener("mouseout", function() {
    jsBar.classList.remove("scaleUp");
})

//NODE
nodeBar.addEventListener("mouseover", function() {
    nodeBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[3];
    cssBar.style.backgroundColor = colors[4]
    jsBar.style.backgroundColor = colors[5];
    nodeBar.style.backgroundColor = colors[6];
    pythonBar.style.backgroundColor = colors[0];
    expressBar.style.backgroundColor = colors[1];
    mongoBar.style.backgroundColor =  colors[2];
})

nodeBar.addEventListener("mouseout", function() {
    nodeBar.classList.remove("scaleUp");
})

//PYTHON
pythonBar.addEventListener("mouseover", function() {
    pythonBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[2];
    cssBar.style.backgroundColor = colors[3]
    jsBar.style.backgroundColor = colors[4];
    nodeBar.style.backgroundColor = colors[5];
    pythonBar.style.backgroundColor = colors[6];
    expressBar.style.backgroundColor = colors[0];
    mongoBar.style.backgroundColor =  colors[1];
})

pythonBar.addEventListener("mouseout", function() {
    pythonBar.classList.remove("scaleUp");
})

//EXPRESS
expressBar.addEventListener("mouseover", function() {
    expressBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[1];
    cssBar.style.backgroundColor = colors[2]
    jsBar.style.backgroundColor = colors[3];
    nodeBar.style.backgroundColor = colors[4];
    pythonBar.style.backgroundColor = colors[5];
    expressBar.style.backgroundColor = colors[6];
    mongoBar.style.backgroundColor =  colors[0];
})

expressBar.addEventListener("mouseout", function() {
    expressBar.classList.remove("scaleUp");
})

//MONGO
mongoBar.addEventListener("mouseover", function() {
    mongoBar.classList.add("scaleUp");

    htmlBar.style.backgroundColor = colors[0];
    cssBar.style.backgroundColor = colors[1]
    jsBar.style.backgroundColor = colors[2];
    nodeBar.style.backgroundColor = colors[3];
    pythonBar.style.backgroundColor = colors[4];
    expressBar.style.backgroundColor = colors[5];
    mongoBar.style.backgroundColor =  colors[6];
})

mongoBar.addEventListener("mouseout", function() {
    mongoBar.classList.remove("scaleUp");
})