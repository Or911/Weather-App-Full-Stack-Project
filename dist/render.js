class Render {
    constructor() {
      this.source = $("#Weather-template").html();
      this.template = Handlebars.compile(this.source);
      this.WeathersContainer = $(".Weathers-container");
    }
    WeathersRender(data ,sign) {
      data.sign = sign || "+"
      let newHtml = this.template(data);
      this.WeathersContainer.append(newHtml);
    }
    buttonSevDel(bt , sign){
      bt.html(sign)
    }
}
