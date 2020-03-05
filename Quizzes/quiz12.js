console.log("Print all numbers between -10 and 19");
for(var index = -10; index <= 19; index++){
	console.log(index);
}

console.log("Print all even numbers between 10 and 40");
for(var index = 10; index <= 40; index+=2){
	console.log(index);
}

console.log("Print all odd numbers between 300 and 333");
for(var index = 300; index <= 333; index++){
	if (index % 2 != 0) console.log(index);
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var index = 5; index <= 50; index++){
	if(index % 3 == 0 && index % 5 == 0) console.log(index);
}
