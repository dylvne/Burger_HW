$(document).ready(function(){
    var list;
    load()
    
    
    $("button").on("click",function(){
        var input = $("#burger-input").val()
        console.log(input)

        var newBurger = {
            name: input,
            devoured: false
        }

        // Send the PUT request.
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function(data) {
          console.log(data)
          // Reload the page to get the updated list
        location.reload();
        }
      );
    })

    function load(){
        $.ajax("/api/list").then(function(data){
            console.log(data)
            list = data

            let plate = []
                for(i=0;i<list.length;i++){
                    if(list[i].devoured == false){
                        plate.push(list[i])
                    }
                }

            let tummy = []
                for(i=0;i<list.length;i++){
                    if(list[i].devoured == false){
                        tummy.push(list[i])
                    }
                }

                state = {
                tummy: tummy,
                plate: plate
            }

            module.exports = state;
            
        })
    }
    
})