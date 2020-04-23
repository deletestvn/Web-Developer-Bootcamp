var app = require("express")();

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/projects/:name", function(req, res){
	var projectName = req.params.name;
	res.render("project.ejs", {projectName: projectName});
});

var port = process.env.PORT || 1000;
app.listen(port, function(){
	console.log("Server Has Started!");
});