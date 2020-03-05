// In JS, to get a random number between 0 and 1, user the Math.random() function.
// Use .floor to round down to a whole number
// Use .ceil to round up to a whole number
// Use .round to round to the nearest whole number

var number = Math.round(Math.random() * 10); // This will generate a whole number between 0 and 1000
console.log(number);

var yourGuess = prompt("Guess a number!");
while(number != yourGuess){	
	if(number > yourGuess){
		alert("Your guess is too small!");
		yourGuess = prompt("Guess a number!");	
	}
	else if(number < yourGuess){
		alert("Your guess is too big!");
		yourGuess = prompt("Guess a number!");	
	}
}
alert("You are so smart");
 