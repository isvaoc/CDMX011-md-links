const axios = require("axios")

function validate(objLink) {
    return axios.get(objLink.href)
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