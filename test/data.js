const filesData = [["C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\.md"], [], ['C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'], ["C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\README.md"]]

const filesMd = [
    'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\nivel1\\nivel2\\.md\\readme2.md',
    'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\nivel1\\readme1.md',
    'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
]

const objLink200 = {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'readme0.md'
}

const objLink404 = {
    href: 'https://isvaoc.github.io/',
    text: 'github isa',
    file: 'readme0.md'
}

const objLinkDep = {
  href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
  text: '¿Qué es Node.js y para qué sirve? - drauta.com',
  file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\README.md'
}

const resDep = {
  href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
  text: '¿Qué es Node.js y para qué sirve? - drauta.com',
  file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\README.md',
  status: 'deprecated',
  message: 'fail'
}

const arrayValidated = [
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
]

const resultArrayValidated = {
    'Total': 5,
    'Unique': 4,
    'Broken': 1
}

const arraySimple = [
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
]

const resultArraySimple = {
    'Total': 5,
    'Unique': 4
}

const resultLinks = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
        file: "C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md", 
        href: "https://isvaoc.github.io/", 
        text: "github isa"
    }
]

const arrayMdLinks = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    },
    {
      href: 'https://isvaoc.github.io/',
      text: 'github isa',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md'
    }
]

const arrayMdLinksSimple = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md',
      status: 200,
      message: 'ok'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md',
      status: 200,
      message: 'ok'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md',
      status: 200,
      message: 'ok'
    },
    {
      href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md',
      status: 200,
      message: 'ok'
    },
    {
      href: 'https://isvaoc.github.io/',
      text: 'github isa',
      file: 'C:\\Users\\ISABEL-PC\\Desktop\\Laboratoria\\CDMX011-md-links\\pruebas\\readme0.md',
      status: 404,
      message: 'fail'
    }
]



module.exports = { filesData, arrayValidated, arraySimple, resultArrayValidated, resultArraySimple, resultLinks, objLink200, objLink404, arrayMdLinks, arrayMdLinksSimple, filesMd, resDep, objLinkDep }