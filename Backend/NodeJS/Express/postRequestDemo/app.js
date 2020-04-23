var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var reviews = [
	{comment: "pretty good shit!", rate: 10},
	{comment: "very disappointing game.", rate: 4},
	{comment: "surprisingly better than the last one!", rate: 7}
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/games/:gameName", function(req, res){
	var gameName = req.params.gameName;
	res.render("game", {gameName: gameName, reviews: reviews});
});

app.post("/addReview", function(req, res){
	var newReview = req.body;
	reviews.push(newReview);
	res.redirect("back");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Has Started!");
});