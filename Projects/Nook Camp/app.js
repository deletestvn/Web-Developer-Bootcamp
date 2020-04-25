var express = require("express");
var ejs = require("ejs");
var bodyParser = require("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var islands = [
		{name: "Verdun", owner: "ThiccGuy", zone: "EDT"},
		{name: "utopia", owner: "huahua", zone: "EDT"},
		{name: "mora mora", owner: "monmon", zone: "EDT"},
		{name: "PurpleTaro", owner: "Mirrorsiri", zone: "EDT"}
];

var villagers = [ 
		{name: "Ankha", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/51/Ankha.png?width=325"},
		{name: "Bob", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/23/Bob_NewLeaf.png?width=325"},
		{name: "Felicity", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/a/aa/Felicity.png?width=325"},
		{name: "Kabuki", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/57/Kabuki.png?width=325"},
		{name: "Katt", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/27/Katt_NewLeaf.png?width=325"}
	/*	{name: "Kid Cat", image: ""}
		{name: "Kiki", image: ""}
		{name: "kitty", image: ""}
		{name: "Lolly", image: ""}
		{name: "Merry", image: ""}
		{name: "Mitzi", image: ""}
		{name: "Moe", image: ""}
		{name: "Monique", image: ""}
		{name: "Olivia", image: ""}
		{name: "Punchy", image: ""}
		{name: "Purrl", image: ""}
		{name: "Raymond", image: ""}
		{name: "Rosie", image: ""}
		{name: "Rudy", image: ""}
		{name: "Stinky", image: ""}
		{name: "Tabby", image: ""}
		{name: "Tangy", image: ""}
		{name: "Tom", image: ""}*/
];

app.get("/", function(req, res){
	res.render("index");
});

app.get("/villagers/", function(req, res){	
	res.render("villagers", {villagers: villagers});
});

app.get("/islands", function(req, res){
	res.render("islands", {islands: islands});
});

app.get("/islands/new", function(req, res){
	res.render("newIsland");
});

app.post("/islands", function(req, res){
	var name = req.body.name;
	var owner = req.body.owner;
	var zone = req.body.zone;
	var newIsland = {name: name, owner: owner, zone: zone};
	islands.push(newIsland);
	res.redirect("islands");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server Connected!");
});