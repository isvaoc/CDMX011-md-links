/*let arrayCompleto = [
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'readme0.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'readme0.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'readme0.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://developers.google.com/v8/',
        text: 'motor de JavaScript V8 de Chrome',
        file: 'readme0.md',
        status: 200,
        message: 'ok'
    },
    {
        href: 'https://isvaoc.github.io/',
        text: 'github isa',
        file: 'readme0.md',
        status: 404,
        message: 'fail'
    }
]*/
/*let arrayCompleto = [
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'readme0.md'
    },
    {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'readme0.md'
    },
    {
        href: 'https://nodejs.org/',
        text: 'Node.js',
        file: 'readme0.md'
    },
    {
        href: 'https://developers.google.com/v8/',
        text: 'motor de JavaScript V8 de Chrome',
        file: 'readme0.md'
    },
    {
        href: 'https://isvaoc.github.io/',
        text: 'github isa',
        file: 'readme0.md'
    }
]*/

function stats(array){
    let broken = [];
    let links = array.map(elem => {
        if (elem.status == 404){
            broken.push(elem.status)
        }
        return elem.href
    }).sort();

    let unique = [];
    for (let i = 0; i < links.length; i++){
        if (links[i] != links[i+1]){
            unique.push(links[i])
        }
    }
    
    let result = {
        'Total': array.length,
        'Unique': unique.length,
        'Broken': broken.length
    }

    if (Object.keys(array[1]).length != 5) {
        delete result.Broken
    }

    return result
}
//console.log(stats(arrayCompleto))
exports.stats = stats