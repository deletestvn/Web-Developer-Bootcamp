var express = require("express");
var request = require("request");

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("search");
});

app.get("/results", function(req, res){
	var movie = req.query.movie;
	var url = "http://www.omdbapi.com/?s=" + movie + "&apikey=thewdb";
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Has Started!");
});