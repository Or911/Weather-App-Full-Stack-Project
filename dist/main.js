const serves = new Serves()
const render = new Render()


$(".input-group").on("click","button",function(){
    let location = $(this).siblings("input").val()
    $(this).siblings("input").val("")
    serves.getNewWeather(location)
    .then((data)=> {
        render.WeathersRender(data)
    })

})
$(".Weathers-container").on("click",".seveBT", function(){
    let name =$(this).data("name")
    let content = $(this).html()
   if (content === "+"){
       serves.saveNewWeather(name)
       .then(res =>{
           if (res.successes){
              render.buttonSevDel($(this), "-")
           }
        })
    }
    else{
        serves.deleteWeather(name)
       .then(res =>{
           if (res.successes){
              render.buttonSevDel($(this),"+")
            }})
    }
})
serves.getSaveWeather().then(data => {
    let sign = "-"
    data.forEach(d => {
        render.WeathersRender(d,sign)
    });
})