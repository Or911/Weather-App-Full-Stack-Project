class Render {
    constructor() {
      this.source = $("#Weather-template").html();
      this.template = Handlebars.compile(this.source);
      this.WeathersContainer = $(".Weathers-container");
    }
    WeathersRender(data) {
    //   this.WeathersContainer.empty();
      let newHtml = this.template(data);
      this.WeathersContainer.append(newHtml);
    }
}