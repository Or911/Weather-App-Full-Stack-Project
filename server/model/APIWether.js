const axios = require('axios');
const CONFIG = require('../config')
const keyWetherAPI = CONFIG.keyWetherAPI

class APIWether {

    GetWether(name) {
        return  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${keyWetherAPI}&units=metric&lang=he`)
    }
}

const APIwether = new APIWether();

module.exports = APIwether