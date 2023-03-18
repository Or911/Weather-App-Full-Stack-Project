const mongoose = require('mongoose');
const schema = mongoose.Schema;

const WeatherSchema = new schema({
    name:String ,
    icon:String ,
    description:String,
    temp:String,
    humidity:String,
    wind:String,
    time:Date
})

const Weather = mongoose.model('Weather', WeatherSchema);
module.exports = Weather;