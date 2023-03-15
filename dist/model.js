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
      this.newData[name] = data
      return data
    });
  }

//   saveNewWeather(data) {
//     $.ajax({
//       method: "POST",
//       url: `/weather`,
//       data: JSON.stringify(data),
//     });
//   }
}
