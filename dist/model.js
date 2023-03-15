class Serves {
  constructor() {
    this.dataSave = {};
    this.newData = {};
  }

  getData() {
    return this.dataSave;
  }

  getNewWeather(name) {
    return $.ajax({
      method: "GET",
      url: `/weather/${name}`,
    }).then((data) => {
      this.newData[data.name] = data
      return data
    });
  }

  saveNewWeather(name) {

    let data = this.newData[name]
    console.log(data);
    $.ajax({
      method: "POST",
      url: `/weather`,
      data:(data),
      dataType: 'json'
    });
  }

  getSaveWeather() {
    return $.ajax({
      method: "GET",
      url: `/weathers`,
    }).then((data) => {
      return data
      
    });
  }
}
