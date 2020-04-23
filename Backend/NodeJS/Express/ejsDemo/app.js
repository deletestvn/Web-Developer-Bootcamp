var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/experience", function(req, res){
	var experiences = [
		{company: "Keywords Studios", title: "Funtionality QA"},
		{company: "Intel Corporation", title: "Technique Intern"},
		{company: "Loho MTL", title: "Social Media Specialist"}
	];

	res.render("experience", {experiences: experiences});
});

app.get("/projects/:name", function(req, res){
	var projectName = req.params.name;
	res.render("project", {projectName: projectName});
});

var port = process.env.PORT || 1000;
app.listen(port, function(){
	console.log("Server Has Started!");
});