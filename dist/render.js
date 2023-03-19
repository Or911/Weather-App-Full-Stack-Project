class Render {
  constructor() {
    this.source = $("#Weather-template").html();
    this.template = Handlebars.compile(this.source);
    this.WeathersContainer = $(".Weathers-container");
  }
  WeathersRender(data, sign) {
    data.sign = sign || "+";
    let newHtml = this.template(data);
    this.WeathersContainer.append(newHtml);
  }
  buttonSevDel(bt, sign) {
    bt.html(sign);
    if (sign == "-") {
      bt.siblings(".updateButtonD").prop("disabled", false);
    } else {
      bt.siblings(".updateButtonD").prop("disabled", true);
    }
  }

  updateWeatherRender(data, html) {
    data.sign = "-";
    let source = $("#Weather-template-update").html();
    let template = Handlebars.compile(source);
    let newHtml = template(data);
    html.empty();
    html.append(newHtml);
  }
}
