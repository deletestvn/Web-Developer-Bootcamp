var rgbColors;
var pickedColor;

var squares = document.getElementsByClassName("square");
var hardSquares = document.getElementsByClassName("hardSquare");
var pickedDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1= document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

function colorGenerator(){
	var rgb = [];
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	rgb.push(Math.floor(Math.random() * 256));
	return "rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")";;
}

function assignColors(){	
	var colors = [];
	for(var i = 0; i < squares.length; i++){
		var color = colorGenerator();
		colors.push(color);
		squares[i].style.backgroundColor = color;
	}
	return colors;
}

function pickGoal(colors){
	var picked = colors[Math.floor(Math.random() * colors.length)];
	pickedDisplay.textContent = picked;
	return picked;
}

function resetGame(){
	rgbColors = assignColors();
	pickedColor = pickGoal(rgbColors);
	reset.textContent = "New Colors";
	message.textContent = "";
	h1.style.backgroundColor = "#232323";

	console.log("Colors are: "+rgbColors);
	console.log("Picked Color is: "+pickedColor);
}

function squareSelected(square){
	if(square.style.backgroundColor === pickedColor){
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = pickedColor;
		}
		h1.style.backgroundColor = pickedColor;
		message.textContent = "Correct!";
		reset.textContent = "Play Again?"
	}
	else {
		square.style.backgroundColor = "#232323";
		message.textContent = "Try Again!";
	}
}

function resetMode(isHardMode){
	if(isHardMode){
		easyButton.classList.remove("selectedMode");
		hardButton.classList.add("selectedMode");
		for(var i = 0; i < hardSquares.length; i++){
			hardSquares[i].classList.add("square");
			hardSquares[i].style.display = "block";
		}
		resetGame();
	}
	else{
		hardButton.classList.remove("selectedMode");
		easyButton.classList.add("selectedMode");
	 	for(var i = 0; i < hardSquares.length; i++){
	 		hardSquares[i].classList.remove("square");
	 		hardSquares[i].style.display = "none";
	 	}
	 	resetGame();
	}
}

reset.addEventListener("click", resetGame);
easyButton.addEventListener("click", function(){resetMode(false);});
hardButton.addEventListener("click", function(){resetMode(true);});

for(var i = 0; i < squares.length; i++){
	if(squares[i].style.display !== "none"){
		squares[i].addEventListener("click", function(){squareSelected(this);});
	}	
}