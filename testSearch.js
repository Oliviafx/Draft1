$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer rUkajLiHIMVFO3mx9jMTIY13XuM8GdVabuF1t37ew4di-l0XD1xhSZ-sKqf7ozxvYEC_WwH-Zn8JSOH73EVA_Jb2oIPDZz_IJ_D6ZE4KAb8nFc9wp6aUb-KDM77SWHYx');
    }
});


$("submitbutton").click(function(){
		document.write("submit clicked");
	})

document.getElementById("submitbutton").addEventListener("click", function(){
	document.write("submit clicked");
}, false);
