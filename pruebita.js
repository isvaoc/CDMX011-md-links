const axios = require('axios');
let obj ={}
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.statusCode);
    obj.prueba = response.statusCode
  })
  .catch(error => {
    console.log(error);
  });