class Serves {
  constructor() {
    this.dataSave = {};
    this.newData = {};
  }

  getData() {
    return this.dataSave;
  }

  saveLocalData(data) {
    data.forEach(d => {
      this.dataSave[d.name] = d
    });
    
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
    let data = this.newData[name] || this.dataSave[name]
    return $.post("/weather", data)
    .then(res =>{
      return res
    })
  }

  deleteWeather (name){
   return $.ajax({
      method: "DELETE",
      url: `/weather/${name}`,
    }).then((res) => {
      return res
      
    });
  }

  getSaveWeather() {
    return $.ajax({
      method: "GET",
      url: `/weathers`,
    }).then((data) => {
      this.saveLocalData(data)
      return data
      
    });
  }
}
