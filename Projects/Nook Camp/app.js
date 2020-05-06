var express 	= require("express"),
 	ejs 		= require("ejs"),
 	bodyParser 	= require("body-parser"),
 	mongoose 	= require("mongoose");

var	Island 		= require("./models/island"),
 	Villager 	= require("./models/villager");

var app 		= express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect("mongodb://localhost:27017/islands",{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27501/villagers",{ useNewUrlParser: true, useUnifiedTopology: true });

// Villager.create(
// 	{
// 		name: "Katt", 
// 		image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/27/Katt_NewLeaf.png?width=325"
// 	}, function(err, villager){
// 		if(err) console.log(err);
// 		else console.log(villager);
// });

// SCHEMA SETUP
// var villagers = [ 
// 		{name: "Ankha", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/51/Ankha.png?width=325"},
// 		{name: "Bob", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/23/Bob_NewLeaf.png?width=325"},
// 		{name: "Felicity", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/a/aa/Felicity.png?width=325"},
// 		{name: "Kabuki", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/57/Kabuki.png?width=325"},
// 		{name: "Katt", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/27/Katt_NewLeaf.png?width=325"}
// ];

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
	Island.findById(req.params.id, function(err, island){
		if(err) console.log(err);
		else{
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