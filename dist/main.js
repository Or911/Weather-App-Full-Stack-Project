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
$(".Weathers-container").on("click",".seveBT", function(){
    let name =$(this).data("name")
    serves.saveNewWeather(name)
})

serves.getSaveWeather().then(data => {
    data.forEach(d => {
        render.WeathersRender(d)
    });
})