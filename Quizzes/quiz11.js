console.log("Print all numbers between -10 and 19");
var index = -10;
while(index <= 19){
	console.log(index);
	index++;
}

console.log("Print all even numbers between 10 and 40");
index = 10;
while(index <= 40){
	if (index % 2 == 0) console.log(index);
	index ++;
}

console.log("Print all odd numbers between 300 and 333");
index = 300;
while(index <= 333){
	if (index % 2 != 0) console.log(index);
	index++;
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
index = 5;
while(index <= 50){
	if(index % 3 == 0 && index % 5 == 0) console.log(index);
	index++;
}