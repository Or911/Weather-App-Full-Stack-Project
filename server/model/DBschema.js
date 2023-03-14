const mongoose = require('mongoose');
const schema = mongoose.Schema;

const WeatherSchema = new schema({
    name:String ,
    icon:String ,
    weather:Object
})

const Weather = mongoose.model('Weather', WeatherSchema);
module.exports = Weather;