const fs = require("fs");
const path = require("path");
const files = require("./findFiles.js")

let arrayFiles = files.findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas");
//arrayFiles = files.findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/README.md");
console.log(arrayFiles)
