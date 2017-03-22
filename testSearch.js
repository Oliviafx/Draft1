//$("submit").click(function(){
    $.ajax({
    url: 'https://api.yelp.com/v3/businesses/search?location=london',
    type: 'GET',
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer rUkajLiHIMVFO3mx9jMTIY13XuM8GdVabuF1t37ew4di-l0XD1xhSZ-sKqf7ozxvYEC_WwH-Zn8JSOH73EVA_Jb2oIPDZz_IJ_D6ZE4KAb8nFc9wp6aUb-KDM77SWHYx
');
//    },
    data: {},
    success: function (data) { document.getElementById("testContent").innerHTML = data; },
    error: function () {document.getElementById("testContent").innerHTML = "whoops, there was an error"; },
    });
});

// $.get(URL,data,function(data,status,xhr),dataType)

// https://www.w3schools.com/jquery/ajax_get.asp
