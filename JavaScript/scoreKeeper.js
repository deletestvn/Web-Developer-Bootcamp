p1 = new Object();
p1.score = 0;
p1.display = document.querySelector("#p1Display");
p1.button = document.querySelector("#p1Button");

p2 = new Object();
p2.score = 0;
p2.display = document.querySelector("#p2Display");
p2.button = document.querySelector("#p2Button");

maxScore = new Object();
maxScore.score = 5;
maxScore.display = document.querySelector("#maxDisplay");

p1.button.addEventListener("click", function(){addScore(p1);});
p2.button.addEventListener("click", function(){addScore(p2);});

function addScore(player){
	if(p1.score >= maxScore.score || p2.score >= maxScore.score) return;
	else{
		player.score++;
		player.display.textContent = player.score;
		if(player.score === maxScore.score) colorWin(player);	
	}
}

function colorWin(player){
	player.display.classList.toggle("win-color");
}

var resetButton = document.querySelector("#reset");
var input = document.querySelector("input");

resetButton.addEventListener("click", reset);
input.addEventListener("change", function(){
	reset();
	changeMaxScore();
})

function reset(){
	if(p1.score === maxScore.score) colorWin(p1);
	if(p2.score === maxScore.score) colorWin(p2);
	p1.score = 0;
	p2.score = 0;
	p1.display.textContent = p1.score;
	p2.display.textContent = p2.score;
}

function changeMaxScore(){
	maxScore.score = Number(input.value);
	maxScore.display.textContent = maxScore.score;
}


	