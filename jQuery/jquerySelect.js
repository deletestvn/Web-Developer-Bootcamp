$("#select-elements").click(jquerySelectElements);
$("#select-styles").click(jquerySelectStyles);

function jquerySelectElements(){
	//All works like querySelectAll
	$("p")[0].textContent += " SELECTED";
	$(".switch-games")[1].textContent += " SELECTED";	
	$("#animal-crossing")[0].textContent += " SELECTED";
}

function jquerySelectStyles(){
	$("#red-dead-redemption").css("color", "red");
	$(".ps4-games").css("font-size", "28px");

	//We can pass in an object with styles
	var xb1GameStyle = {
		backgroundColor: "green",
		fontWeight: "bold",
		color: "white"
	};
	$(".xb1-games").css(xb1GameStyle);
	$("p:eq(2)").css({
		fontSize: "36px",
		fontWeight: "bold",
		color: "green"
	});
}
