const axios = require('axios');
const keyAPI = "596ab09885b3f4972ad91ac7cc809fab"

class APIWether {

    GetWether(name) {
        // return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=596ab09885b3f4972ad91ac7cc809fab&units=metric&lang=he`)
        return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=596ab09885b3f4972ad91ac7cc809fab&units=metric&lang=he`)
    }
}

const APIwether = new APIWether();

module.exports = APIwether