var rgbColors;
var pickedColor;

var squares = document.getElementsByClassName("square");
var pickedDisplay = document.querySelector("#colorDisplay");

function colorGenerator(){
	var rgb = [];
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	return rgb;
}

function assignColors(){	
	var colors = [];
	for(var i = 0; i < squares.length; i++){
		var color = colorGenerator();
		colors.push(color);
		squares[i].style.backgroundColor = "rgb("+color[0]+", "+color[1]+", "+color[2]+")";
	}
	return colors;
}

function pickGoal(colors){
	var picked = colors[Math.floor(Math.random() * colors.length)];
	pickedDisplay.textContent = "RGB("+picked[0]+", "+picked[1]+", "+picked[2]+")";
	return picked;
}

function gameStart(){
	rgbColors = assignColors();
	pickedColor = pickGoal(rgbColors);
}

function squareSelected(square){
	var pickedBgColor = "rgb("+pickedColor[0]+", "+pickedColor[1]+", "+pickedColor[2]+")";
	if(square.style.backgroundColor === pickedBgColor) console.log("Correct!");
	else console.log("Wrong!");
}

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){squareSelected(this);});
}