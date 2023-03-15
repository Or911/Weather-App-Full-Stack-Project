const serves = new Serves()
const render = new Render()


$(".input-group").on("click","button",function(){
    let location = $(this).siblings("input").val()
    $(this).siblings("input").val("")
    serves.getNewWeather(location)
    .then((data)=> {
        console.log(data);
        render.WeathersRender(data)
    })

})