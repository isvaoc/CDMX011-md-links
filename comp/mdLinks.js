const fs = require("fs");
const files = require("./findFiles.js")
const links = require("./findLinks.js")
const validate = require("./validate.js")


//let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/README.md";
//let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas/readme0.md";
//let pathFiles = "C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas"
//let options = {
  //validate: true
//}

const mdLinks = (pathFiles, options) => {
  return new Promise((resolve, reject) => {
    let arrayFiles = files.findFiles(pathFiles);
    if (arrayFiles.length == 0) { reject('There are no md files in this path') };
    let arrayLinks = links.findLinks(arrayFiles);
    if (arrayLinks.length == 0) { reject('There are no links in this path') };
    //console.log(arrayLinks)
    if (options.validate == true) {
      let arrayLinksStatus = arrayLinks.map(elem => {
        //console.log(elem)
        //console.log(validate.validate(elem))
        return validate.validate(elem)})
      resolve(Promise.all(arrayLinksStatus))
    } else {
      resolve(arrayLinks)
    }
  })
}

/*mdLinks(pathFiles, options)
  .then((res) => {
    console.log(res);
    //console.log(stats.stats(res))
  })
  .catch((error) => console.log(error))*/

exports.mdLinks = mdLinks