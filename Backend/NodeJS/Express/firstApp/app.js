var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req,res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
	res.send("Goodbye!");
});

// "/cat" => "Meow!"
app.get("/cat", function(req,res){
	res.send("Meow!");
});

// Tell Express to listen for requests
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Has Started!");
});