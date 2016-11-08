    $(document).ready(function(){

      /*========= Search cities  ========= **/
      $( "#cityfield" ).keyup(function() {
        // var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q="+$("#cityfield").val();
        var url = "http://localhost:3000/getcity?q="+$("#cityfield").val();
        console.log("query city: " + url);
        $.getJSON(url,function(data) {
            var everything;
            everything = "<ul class='weather-info'>";
            $.each(data, function(i,item) {
              everything += "<li> "+data[i].city;
            });
            everything += "</ul>";
            $("#txtHint").html(everything);
        })
      });

      /*========= Search weather  ========= **/

      $(".add-new-content").click(function(){
        // $(".modal").showModal();




        //   var choosenCity = $('#cityfield').val();
        //   $('#dispcity').html(choosenCity);

        //   var url = "http://api.wunderground.com/api/5a05396adb987893/conditions/q/UT/"+$("#cityfield").val() + ".json";
        //   console.log(url);
        // $.getJSON(url,function(data) {

        //     var weather = "<ul>";

        //     $.each(data, function(i,item){
        //       if(item.display_location != undefined){
        //         console.log(item.display_location.city);
        //         weather += "<li><strong>Location:</strong> " + item.display_location.city + "</li>";
        //       }
              
        //       if(item.temperature_string != undefined){
        //         console.log(item.temperature_string);
        //         weather += "<li><strong>Temperature:</strong>" + item.temperature_string + "</li>";
        //       }

        //        if(item.weather != undefined){
        //         console.log(item.weather);
        //         weather += "<li><strong>Weather:</strong> " + item.weather + "</li></ul>" ;
        //       }
        //       $("#weather").html(weather);
        //     });
        //   });
        });

    /*========= Search Stack Overflow  ========= **/
  $( "#searchStack" ).click(function(){

    var choosenCity = $('#stackExchageTerm').val();
    // $('#dispcity').html(choosenCity);

    var url = "http://localhost:3000/owl?q="+ choosenCity;
    console.log(url);

    $.getJSON(url,function(data){

         console.log("Data obtained from StackExchange: ",data);

         var response = "";
         // console.log(response);

        $.each(data, function(i,item){
         
            console.log(item);
            if(item.type != undefined){
              response += "<p><strong>Type:</strong><strong><em><span style='color:red'>"+item.type+"</span></em></strong></p>";
            }
            if(item.defenition != undefined){
              response += "<p><strong>Definition:</strong>"+item.defenition+"</p>";
            } 
            if(item.example != undefined){
              response += "<p><strong>Example:</strong>"+item.example+"</p>";
            } 
        });
                  
        $("#restRequest").html(response);
    });
  });


  $("#stackExchageTerm").focus(function(){
      $(document.body).css("background-image","url(../images/owl.jpg)").css("background-repeat","no-repeat");
  });

  $("#cityfield").focus(function(){
      $(document.body).css("background-image","url(../images/default-background.jpg)").css("background-repeat","no-repeat");
  });
  
  function addContent(){
    console.log("adding content");
  }

});