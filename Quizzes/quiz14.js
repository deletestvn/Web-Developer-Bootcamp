console.log("Connected!");

function printReverse(array){
	for(var index = array.length - 1; index >= 0; index--){
		console.log(array[index]);
	}
}

function isUniform(array){
	var firstItem = array[0];
	for(var index = 0; index < array.length; index++){
		if(firstItem !== array[index]) return false;
	}
	return true;
}

function sumArray(array){
	var result = 0;
	array.forEach(function(content){
		result += content;
	});
	return result;
}

function max(array){
	var maxNum = array[0];
	array.forEach(function(content){
		if(content > maxNum) maxNum = content;
	});
	return maxNum;
}