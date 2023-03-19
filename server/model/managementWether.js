const APIWether = require("./APIWether");
const Weather = require("./DBschema");
const sortDate = require('../utilities/sortDate')

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
      dataWether.time = sortDate(new Date())
      return dataWether;
    })
    .catch(function (error) {
      return { error: error.response };
    });
};
const getDBLocations = function (){
  return Weather.find({}).then((wether) =>{
    for (let index in wether){
      wether[index]._doc.time = sortDate(wether[index]._doc)
    }
    return wether
    
  })
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
      return Weather.findOneAndUpdate(filter, update).then((data) => {
        return Weather.findById({_id:data.id}).then(wether =>{
          wether._doc.time = sortDate(wether._doc)
          return wether
        })
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
