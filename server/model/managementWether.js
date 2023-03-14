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
    dataWether.weather = {
      description: wetherData.weather[0].description,
      temp: wetherData.main.temp,
      humidity: wetherData.main.humidity,
      wind: wetherData.wind.speed,
    };
    return dataWether;
  });
};
const getDBLocations = function () {
  return Weather.find({}).then((wether) => wether);
};

const addLocation = function (locationData) {
  let WeatherData = new Weather(locationData);
  WeatherData.save();
  console.log(WeatherData);
};
const deleteDBLocation = function (location) {
  return Weather.deleteOne({ name: location })
  .then(() => {return `${location} was deleted`});
};

const managementData = {
  getWetherByLocations,
  getDBLocations,
  addLocation,
  deleteDBLocation,
};

module.exports = managementData;
