const fs = require("fs");
const path = require("path");
const files = require("./findFiles.js")
const links = require("./findLinks.js")
const validateAll = require("./validate.js")

//let arrayFiles = files.findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas");
//let arrayFiles = files.findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/README.md");
let arrayFiles = files.findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas/readme0.md");
//console.log(arrayFiles)

let arrayLinks = links.findLinks(arrayFiles);
//console.log(arrayLinks)
//console.log(arrayLinks.length)

 

validateAll.validateAll(arrayLinks).then(res => {
    console.log(res)
    res.forEach(elem => console.log(elem))
});



