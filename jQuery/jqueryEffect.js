$("#fadeOut").on("click", fadeOutEffect);
$("#fadeIn").on("click", fadeInEffect);
$("#fadeToggle").on("click", fadeToggleEffect);

$("#slideDown").on("click", slideDownEffect);
$("#slideUp").on("click", slideUpEffect);
$("#slideToggle").on("click", slideToggleEffect);

function fadeOutEffect(){
	$(".fadeDiv").fadeOut(500);
}

function fadeInEffect(){
	$(".fadeDiv").fadeIn(500);	
}

function fadeToggleEffect(){
	$(".fadeDiv").fadeToggle(500);
}

function slideDownEffect(){
	$(".slideDiv").slideDown(500);
}

function slideUpEffect(){
	$(".slideDiv").slideUp(500);	
}

function slideToggleEffect(){
	$(".slideDiv").slideToggle(500);
}