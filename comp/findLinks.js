const fs = require("fs");
const path = require("path");
const marked = require("marked");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function findLinks(arrayPaths) {
    let arrayLinks = []
    arrayPaths.forEach((elem) => {
        let data = fs.readFileSync(elem, 'utf8');
        const dom = new JSDOM(marked(data));
        dom.window.document.querySelectorAll("a").forEach(a => {
            let link = a.href;
            if (!link.startsWith('about:blank#')) {
                let texto = a.textContent;
                let archivo = path.resolve(elem);
                arrayLinks.push({ href: link, text: texto, file: archivo })
            };
        });
    });
    return arrayLinks
};

exports.findLinks = findLinks