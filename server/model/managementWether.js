const APIWether = require("./APIWether");
const Weather = require("./DBschema");
const mongoose = require("mongoose");
const moment = require("moment");
mongoose.connect("mongodb://127.0.0.1:27017/Wether", {
  useNewUrlParser: true,
});

const getTime = function () {
  return moment().format("LLLL");
}; //TODO: לשאול למה לא שומר על הסדר הקיים

const getWetherByLocations = function (name) {
  const dataWether = {};
  return APIWether.GetWether(name)
    .then((wether) => {
      let wetherData = wether.data;
      dataWether.name = wetherData.name;
      dataWether.icon = wetherData.weather[0].icon;
      dataWether.description = wetherData.weather[0].description;
      dataWether.temp = wetherData.main.temp;
      dataWether.humidity = wetherData.main.humidity;
      dataWether.wind = wetherData.wind.speed;
      dataWether.time = new Date();
      return dataWether;
    })
    .catch(function (error) {
      return { error: error.response };
    });
};
const getDBLocations = function () {
  return Weather.find({}).then((wether) => wether);
};

const addLocation = function (locationData) {
  let WeatherData = new Weather(locationData);
  WeatherData.save();
};
const deleteDBLocation = function (location) {
  return Weather.deleteOne({ name: location }).then(() => {
    return `deleted`;
  });
}

  const updateDBLocation = function (location) {
    return getWetherByLocations(location)
    .then(data => {
      let update = data
      let filter = {name:data.name , description: data.description }
      return Weather.findOneAndUpdate(filter, update).then((wether) => {
        return wether
      });
    })

};

const managementData = {
  getWetherByLocations,
  getDBLocations,
  addLocation,
  deleteDBLocation,
  updateDBLocation
};

module.exports = managementData;
