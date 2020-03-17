function isEven(int){
	if(int % 2 == 0) return true;
	else return false;
}

function factorial(int){
	if(int === 0) return 1;
	var result = int;

	while(int !== 1){
		int -= 1;
		result = result * int;
	}
	return result;
}

function kebabToSnake(string){
	while(string.indexOf("-") != -1){
		string = string.substring(0, string.indexOf("-")) + "_" + string.substring(string.indexOf("-") + 1);
	}
	return string;
}