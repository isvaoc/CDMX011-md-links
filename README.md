# Librería Markdown Links

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Diagrama de flujo](#2-diagrama-de-flujo)
* [3. Instrucciones de uso](#3-instrucciones-de-uso)
* [4. Ejemplos](#4-ejemplos)
* [5. Documentación del API](#5-documentación-del-api)

***

## 1. Resumen del proyecto
La librería MD Links proporciona al usuario que la necesite una respuesta rápida y eficaz para obtener
los links dentro de archivos del tipo markdown. Incluso es capaz de extraer dicha información si se le 
porporciona la ruta del directorio contenedor. Esto es posible haciéndo uso de la recursividad. Existen dos opciones que el usuario puede utilizar pero no son mutuamente excluyentes.

La primera es **validate**, si el usuario **no** escribe en la terminal esta palabra reservada, el resultado será un array con todos los objetos construidos a partir del link, el texto que acompaña al link y el archivo donde se encontró dicho enlace. Si el usuario **sí** escribe validate, el resultado será un array con todos los objetos construidos a partir del link, el texto que acompaña al link y el archivo 
donde se encontró dicho enlace pero también se agregará el statusCode del link y un breve mensaje referente al status.

La segunda opción es **stats**, esta dependerá de la primera opción ya que si el usuario decide **no** usar **validate**, el resultado será únicamente el número total de links y la cantidad de links no repetidos. Sin embargo, si el usuario decide **sí** usar **validate** entonces, al resultado anterior se 
le añadirá el número total de links con status 404.

## 2. Diagrama de flujo
Tal vez resulte un poco difícil de entenderlo leyéndolo, por eso hice un diagrama de flujo que permite 
visualizar más gráficamente el proceso que lleva a cabo la librería MD Links.

![mdlinks](https://user-images.githubusercontent.com/74514413/140080817-95db6ba5-ef07-4099-8289-0b41586234c9.png)

Cabe mencionar que para hacer este diagrama, tenía una cantidad limitada de figuras entonces tuve que resumir algunos pasos.

Igualmente puedes revisar mi proyecto en github projects para observar cómo fue el flujo de trabajo  y encontrar las tareas (**_issues_**) que realicé por cada **_milestone_**.

## 3. Instrucciones de uso
Para empezar a usar esta librería primero debes de:
- [ ] Forkear el repositorio
- [ ] Clonar el repositorio a tu computadora
- [ ] En tu terminal escribe `npm install`
- [ ] En tu terminal escribe `npm link`
- [ ] Si todo salió bien, puedes escribir en tu terminal `md-links`

## 4. Ejemplos
La librería necesita de una sintaxis específica para poder funcionar correctamente, es por eso que explicaré brevemente cada funcionalidad.

La sintaxis más completa que podemos utilizar es:

```sh
$ md-links 'ruta absoluta o relativa' --opcion1 --opcion 2
```

Recordemos que las opciones son: **validate** y **stats**. No es necesario que se escriban en un orden específico, con que se encuentren presentes, el programa logrará identificarlas. Tampoco es necesario que se escriban las dos o una para que el programa funcione, recordemos que son *opcionales*.

El usuario tampoco debe de aprenderse de memoria toda esta información, el programa le irá señalando si comete algún error o si así lo prefiere, podrá entrar a la ayuda de la librería para recordar los comandos.

```sh
$ md-links --help
```

Si sólo se introduce el comando `md-links` y la ruta, el resultado será:

```sh
$ md-links 'ruta absoluta o relativa'
./some/example.md Link a algo http://algo.com/2/3/ 
./some/example.md algún doc https://otra-cosa.net/algun-doc.html 
./some/example.md Google http://google.com/
```

Si se introduce el comando `md-links`, la ruta y la opción **stats**, el resultado será:
```sh
$ md-links 'ruta absoluta o relativa' --stats
Total: 3
Unique: 2
```

Si se introduce el comando `md-links`, la ruta y la opcion **validate**, el resultado será:

```sh
$ md-links 'ruta absoluta o relativa' --validate
./some/example.md Link a algo http://algo.com/2/3/ 200 ok
./some/example.md algún doc https://otra-cosa.net/algun-doc.html 404 fail
./some/example.md Google http://google.com/ 200 ok
```

Si se introduce el comando `md-links`, la ruta, la opción **validate** y la opción **stats**, el resultado será:

```sh
$ md-links 'ruta absoluta o relativa' --validate --stats
Total: 3
Unique: 2
Broken: 1
```

Si se introduce un directorio **sin archivos md** o una ruta que no es válida, el programa se lo dirá y tendrá que usar una nueva ruta.

Si se introduce la ruta de un archivo md **que no contiene links**, el programa se lo dirá y tendrá que usar una nueva ruta o un nuevo archivo.

## 5. Documentación del API


***

Librería creada por Isabel Valdés @ Laboratoria 2021
