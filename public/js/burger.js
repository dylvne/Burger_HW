$(document).ready(function(){
    var input = $("#burger-input").val()
    
    $("button").on("click",function(){
        console.log(input)
        var newBurger = {
            name: input,
            devoured: false
        }
    })
})