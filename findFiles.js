const fs = require("fs");
const path = require("path");

let arrayPaths = []
function findFiles(ruta) {
  const abs = path.resolve(ruta);
  if (path.extname(abs).length == 0 && !path.basename(abs).startsWith('.')) {
    let list = fs.readdirSync(abs);
    list.forEach((file) => {
      if (path.extname(file).length == 0) {
        let rutita = path.join(abs, file);
        findFiles(rutita);
      } else {
        let rutita = path.join(abs, file);
        if (path.extname(file) == '.md' || path.extname(file).toLowerCase() == '.markdown') {
          arrayPaths.push(rutita);
        }
      }
    });
    return arrayPaths;
  } else if (path.extname(abs).length == 0 && path.basename(abs).startsWith('.md')){
    arrayPaths.push(abs);
    return arrayPaths;
  } else if (path.extname(abs) == '.md'){
    arrayPaths.push(abs);
    return arrayPaths;
  } else if (path.extname(abs).length == 0 && path.basename(abs).startsWith('.')) {
    return arrayPaths;
  } else {
    return arrayPaths;
  }
}

exports.findFiles = findFiles