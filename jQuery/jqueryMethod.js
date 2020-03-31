$("#text").click(textMethod);
$("#html").click(htmlMethod);
$("#attr").click(attrMethod);
$("#val").click(valMethod);
$("#addClass").click(addClassMethod);
$("#removeClass").click(removeClassMethod);
$("#toggleClass").click(toggleClassMethod);

//text() works like textContent()
function textMethod(){
	$("li").text("text() works like textContent()");
}

function htmlMethod(){
	$("li").html("<a href='http://www.google.com'>html() works like innerHTML()</a>");
}

function attrMethod(){
	$("img").attr("src", "https://i.ytimg.com/vi/i-VMrW42J-0/maxresdefault.jpg");
}

function valMethod(){
	$("li").text($("input").val());
}

function addClassMethod(){
	$("li").addClass("correct");	
}

function removeClassMethod(){
	$("li").removeClass("correct");
}

function toggleClassMethod(){
	$("li").toggleClass("done");
}