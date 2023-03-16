const APIWether = require("./APIWether");
const Weather = require("./DBschema");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Wether", {
  useNewUrlParser: true,
});

const getWetherByLocations = function (name) {
  const dataWether = {};
  return APIWether.GetWether(name).then((wether) => {
    let wetherData = wether.data;
    dataWether.name = wetherData.name;
    dataWether.icon = wetherData.weather[0].icon;
    dataWether.description = wetherData.weather[0].description
    dataWether.temp = wetherData.main.temp
    dataWether.humidity = wetherData.main.humidity
    dataWether.wind = wetherData.wind.speed
    return dataWether;
  })
  .catch(function (error) {
    return {error: error.response}

})
};
const getDBLocations = function () {
  return Weather.find({}).then((wether) => wether);
};

const addLocation = function (locationData) {
  let WeatherData = new Weather(locationData);
  WeatherData.save();
};
const deleteDBLocation = function (location) {
  return Weather.deleteOne({ name: location })
  .then(() => {return `deleted`});
};

const managementData = {
  getWetherByLocations,
  getDBLocations,
  addLocation,
  deleteDBLocation,
};

module.exports = managementData;
