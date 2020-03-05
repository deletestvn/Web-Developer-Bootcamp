var userAge = prompt("How old are you?");

if(userAge < 0) console.log("Error: wrong input!");

if(userAge % 2 == 1) console.log("Your age is odd!");

if(userAge == 21) console.log("Happy 21st birthday!");

if(userAge % Math.sqrt(userAge) === 0) console.log("Perfect square!");
