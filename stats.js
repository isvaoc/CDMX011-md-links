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

function stats(arrayCompleto){
    let links = [];
    let broken = [];
    arrayCompleto.forEach(elem => {
        links.push(elem.href);
        if (elem.status == 404){
            broken.push(elem.status)
        }
    })
    let newLinks = links.sort()
    let unique = []
    for (let i = 0; i < newLinks.length; i++){
        if (newLinks[i] != newLinks[i+1]){
            unique.push(newLinks[i])
        }
    }

    let result = {
        'Total': arrayCompleto.length,
        'Unique': unique.length,
        'Broken': broken.length
    }
    return result
}

exports.stats = stats