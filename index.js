const fs = require("fs");
const files = require("./findFiles.js")
const links = require("./findLinks.js")
const validate = require("./validate.js")
const stats = require("./stats.js");

//let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/README.md";
//let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas/readme0.md";
let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas"
let options = {
  validate: false
}

const mdLinks = (pathFiles, options) => {
  return new Promise ((resolve, reject) => {
    const validPath = fs.existsSync(pathFiles);
    if (validPath) {
      let arrayFiles = files.findFiles(pathFiles);
      if (arrayFiles.length == 0) {reject('There are no md files in this path')};
      let arrayLinks = links.findLinks(arrayFiles);
      if (arrayLinks.length == 0) {reject('There are no links in this path')};
      if (options.validate == true){
        let arrayLinksStatus = arrayLinks.map(elem => validate.validate(elem))
        resolve(Promise.all(arrayLinksStatus))
      } else {
        resolve(arrayLinks)
      }
    } else {
      reject('The path is not valid, try again')
    }
  })
}

mdLinks(pathFiles, options)
.then((res) => {
  console.log(res);
  console.log(stats.stats(res))
})
.catch((error) => console.log(error))


