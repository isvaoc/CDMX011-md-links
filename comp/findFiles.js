const fs = require("fs");
const path = require("path");


function findFiles(ruta) {
    let arrayPaths = []
    const abs = path.resolve(ruta);
    if (path.extname(abs).length == 0 && !path.basename(abs).startsWith('.')) {
        let arrProv = []
        const recursion = (route) => {
            let list = fs.readdirSync(route);
            list.forEach((file) => {
                let rutita = path.join(route, file);
                if (path.extname(file).length == 0 && !path.basename(rutita).startsWith('.') || path.basename(rutita).startsWith('.md')) {
                    recursion(rutita);
                } else {
                    if (path.extname(file) == '.md' || path.extname(file).toLowerCase() == '.markdown') {
                        arrProv.push(rutita)
                    } //else if (path.extname(rutita).length == 0 && path.basename(rutita).startsWith('.md')) {
                        //arrProv.push(rutita)
                    //}
                }
            });
            return arrProv;
        }
        arrayPaths.push(...recursion(abs))
        return arrayPaths
    } else if (path.extname(abs).length == 0 && path.basename(abs).startsWith('.md')) {
        arrayPaths.push(abs);
        return arrayPaths;
    } else if (path.extname(abs) == '.md') {
        arrayPaths.push(abs);
        return arrayPaths;
    } else if (path.extname(abs).length == 0 && path.basename(abs).startsWith('.')) {
        return arrayPaths;
    } else {
        return arrayPaths;
    }
}
//console.log(findFiles('../README.md'))

exports.findFiles = findFiles