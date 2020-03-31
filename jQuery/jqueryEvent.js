$("#click").click(clickEvent);
$("#keypress").keypress(keypressEvent);
$("#on").on("click", function(){onEvent("click");})
$("#on").on("mouseenter", function(){onEvent("mouseenter");});
$("#on").on("mouseleave", function(){onEvent("mouseleave");})

function clickEvent(){
	var color = colorGenerator();
	$("body").css("backgroundColor", color);
}

function keypressEvent(event){
	if(event.which === 13){
		var color = colorGenerator();
		$("body").css("backgroundColor", color);
	}
}

function onEvent(type){
	if(type==="click"){
		$("#on").text("click");
		var color = colorGenerator();
		$("body").css("backgroundColor", color);	
	}
	else if(type==="mouseenter"){
		$("#on").text("mouseenter");
	}
	else if(type==="mouseleave"){
		$("#on").text("on()");	
	}
}

function colorGenerator(){
	var rgb = [];
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	return "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";;
}

function textGenerator(){
	var text = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 "
	for(var i =0; i < 10; i++){
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}