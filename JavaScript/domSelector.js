console.log("CONNECTED!");
//By Id:
function selectById(){
	return document.getElementById("first");
}

function selectById_QS(){
	return document.querySelector("#first");
}

//By Class Name:
function selectByClassName(){
	return document.getElementsByClassName("special")[0];
}

function selectByClassName_QS(){
	return document.querySelector(".special");
}

function selectByClassName_QSA(){
	return document.querySelectorAll(".special")[0];
}

//By Tag Name:
function selectByTagName(){
	return document.getElementsByTagName("p")[0];
}

function selectByTagName_QS(){
	return document.querySelector("p");
}

function selectByTagName_QSA(){
	return document.querySelectorAll("p")[0];
}

var functions = [
	selectById,
	selectById_QS,
	selectByClassName,
	selectByClassName_QS,
	selectByClassName_QSA,
	selectByTagName,
	selectByTagName_QS,
	selectByTagName_QSA
];

function callSelectors(){
	functions.forEach(function(func){
		func().innerHTML += ("+" + func.name);
	});
}

setTimeout(callSelectors, 1000);
