// Node Exercise
// Create new file "grader.js"

// In the file define a new function named "average"
// It should take a single parameter: an array of test scores
// It should return the average score in the array, rounded to the nearest whole number

function average(scores){
	var sum = 0;
	scores.forEach(function(score){sum += score;});
	// for(var i = 0; i < scores.length; i++){
	// 	sum += scores[i];
	// }
	return Math.round(sum/scores.length);
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log("Average score of group 1 is: " + average(scores1)); // should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log("Average score of group 2 is: " + average(scores2)); // should return 68