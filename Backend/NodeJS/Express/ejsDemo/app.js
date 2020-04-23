var app = require("express")();

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/experience", function(req, res){
	var experiences = [
		{company: "Keywords Studios", title: "Funtionality QA"},
		{company: "Intel Corporation", title: "Technique Intern"},
		{company: "Loho MTL", title: "Social Media Specialist"}
	];

	res.render("experience.ejs", {experiences: experiences});
});

app.get("/projects/:name", function(req, res){
	var projectName = req.params.name;
	res.render("project.ejs", {projectName: projectName});
});

var port = process.env.PORT || 1000;
app.listen(port, function(){
	console.log("Server Has Started!");
});