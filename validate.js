const axios = require("axios")

/*let objLink = {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'readme0.md'
}*/

/*const arrayLinks = [
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'readme0.md'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'readme0.md'
    }
]*/

async function validate(objLink) {
    return await axios.get(objLink.href)
    .then((response) => {
        if (response.status >= 200 || response.status < 400){
            const objCompleted = {
                ...objLink,
                'status': response.status,
                'message': 'ok'
            }
            return objCompleted
        }
    })
    .catch((error) => {
        const objCompleted = {
            ...objLink,
            'status': error.response.status,
            'message': 'fail'
        }
        return objCompleted
    })
};

/*function validateAll(arrayLinks){
    return new Promise((resolve, reject ) => {
        let arrlink = arrayLinks.map(elem => validate(elem))
        resolve(Promise.all(arrlink))
    })
}*/

/*validateAll(arrayLinks)
.then((res) => {
    console.log(res)
})*/


//exports.validateAll = validateAll
exports.validate = validate