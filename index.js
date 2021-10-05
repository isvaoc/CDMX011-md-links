//module.exports = () => {
// ...
//};

const fs = require("fs");
const path = require("path");


function findFiles(ruta, callback) {
  const abs = path.resolve(ruta)
  fs.readdir(abs, (err, list) => {
    if (err) return console.error(err);
    list.forEach((file) => {
      if (path.extname(file).length == 0) {
        //console.log(file);
        let rutita = path.join(abs, file);
        //console.log(rutita);
        findFiles(rutita, callback)
      } else {
        //console.log(file);
        let rutita = path.join(abs, file);
        //console.log(rutita);
        if (path.extname(file) == '.md' || path.extname(file) == '.markdown' || path.extname(file) == '.MARKDOWN'){
          //arrayPaths.push(rutita)
          callback(null, rutita)
          //console.log('añadi ' + file)
          //console.log(arrayPaths)
        }
      }
    });
    //console.log(arrayPaths)
  });
  //console.log(arrayPaths)
  //return callback
}
findFiles("C:/Users/ISABEL-PC/Desktop/Laboratoria/CDMX011-md-links/pruebas", (err, content)=>{
  if (err) return console.error(err);
  console.log(content)
  let filename = path.basename(content);
  console.log(filename);
  //return content
});
//arrayPaths.push(valor)
//console.log(arrayPaths)

/*fs.readFile('./package.json', 'utf8' , (err, data) => {
  if (err) return console.error(err);
  console.log(data)
})*/
