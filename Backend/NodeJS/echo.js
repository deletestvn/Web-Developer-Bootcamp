// Node Exercise

/**
 * Using the command line, create a file "echo.js"
 * Inside the file, write a function named echo that takes 2 arguments: 
		a string and a number
 * It should print out the string, number, number of times  
 * Run the content of echo.js using node
**/ 

function echo(str, num){
	for(var i = 0; i < num; i++){
		console.log(str);
	}
}

echo("Echo!!!", 3);
echo("Tater Tots", 5);

