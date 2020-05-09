var express 	= require("express"),
 	ejs 		= require("ejs"),
 	bodyParser 	= require("body-parser"),
 	mongoose 	= require("mongoose");

var	Island 		= require("./models/island"),
 	Villager 	= require("./models/villager"),
 	seedDb		= require("./seeds");

var app 		= express();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/islands",{ useNewUrlParser: true, useUnifiedTopology: true });
seedDb();

app.get("/", function(req, res){
	res.render("index");
});

app.get("/villagers/", function(req, res){
	Villager.find({}, function(err, villagers){
		if(err) console.log(err);
		else res.render("villagers", {villagers: villagers});
	});		
});

app.get("/islands", function(req, res){
	Island.find({}, function(err, islands){
		if(err) console.log(err);
		else res.render("islands", {islands: islands});
	});	
});

app.get("/islands/new", function(req, res){
	res.render("newIsland");
});

app.get("/islands/:id", function(req, res){
	// find the island with the provided id
	Island.findById(req.params.id).populate("visitors").exec(function(err, island){
		if(err) console.log(err);
		else{
			console.log(island);
			// render show template with that island
			res.render("showIsland", {island: island});
		}
	});	
});

app.post("/islands", function(req, res){
	// get data from form
	var name = req.body.name;
	var owner = req.body.owner;
	var zone = req.body.zone;
	// create a new island and save to database	
	var newIsland = {name: name, owner: owner, zone: zone};
	Island.create(newIsland, function(err, island){
		if(err) console.log(err);
		else{
			console.log("NEW ISLAND CREATED");
			console.log(island);
			res.redirect("islands");
		}
	});	
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Connected!");
});