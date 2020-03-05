var answer = prompt("Are we there yet?");


while(answer.indexOf("yes") == -1)/*indexOf shows the existence of the content, if no then it will be -1*/{
	answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!!!");