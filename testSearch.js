$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$.get(URL,data,function(data,status,xhr),dataType)

// https://www.w3schools.com/jquery/ajax_get.asp
