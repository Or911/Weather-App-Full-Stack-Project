const serves = new Serves();
const render = new Render();

$(".searchBar").on("click", "button", function () {
  let location = $(this).siblings("input").val();
  $(this).siblings("input").val("");
  serves.getNewWeather(location).then((data) => {
    render.WeathersRender(data);
  });
});
$(".Weathers-container").on("click", ".seveBT", function () {
  let name = $(this).data("name");
  let content = $(this).html();
  if (content === "+") {
    serves.saveNewWeather(name).then((res) => {
      if (res.successes) {
        render.buttonSevDel($(this), "-");
      }
    });
  } else {
    serves.deleteWeather(name).then((res) => {
      if (res.successes) {
        render.buttonSevDel($(this), "+");
      }
    });
  }
});

$(".Weathers-container").on("click", ".updateButtonD", function () {
  $(this).children(".updateButton").css("animation-play-state", "running");
  let html = $(this).parents(".cards")
  let name = $(this).siblings(".seveBT").data("name");
  console.log(name);
  serves.updateWeather(name)
  .then(data =>{
    render.updateWeatherRender(data, html)
  })
});

serves.getSaveWeather().then((data) => {
  let sign = "-";
  data.forEach((d) => {
    render.WeathersRender(d, sign);
  });
});
