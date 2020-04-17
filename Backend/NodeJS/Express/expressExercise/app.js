var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req,res){
	res.send("Hi there, welcome to my assignment!");
});

// Visiting "/speak/pig" should print "The pig says 'Oink'"
// Visiting "/speak/cow" should print "The cow says 'Moo'"
// Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
app.get("/speak/:animal", function(req,res){
	var animal = req.params.animal;
	var words = "";
	if(animal === "pig") words += "'Oink'";
	else if(animal === "cow") words += "'Moo'";
	else if(animal === "dog") words += "'Woof Woof!'";
	else words += "nothing";
	res.send("The " + animal + " says " + words);
});

// Visiting "/repeat/hello/3" should print "hello hello hello"
// Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
// Visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:contents/:times", function(req,res){
	var contents = req.params.contents;
	var times = Number(req.params.times);
	var response = "";
	for(var i = 0; i < times; i++){
		response += contents + " ";
	}
	res.send(response.slice(0, -1));
});

// Visint any other route, print "Sorry. Page not found!"
app.get("*", function(req,res){
	res.send("Sorry. Page not found!")
});

var port = process.env.PORT || 2000;
app.listen(port, function(){
	console.log("Server Has Started!");
});