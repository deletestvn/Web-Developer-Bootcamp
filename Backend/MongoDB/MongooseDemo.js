var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongooseDemo",{ useNewUrlParser: true, useUnifiedTopology: true });

var villagerSchema = new mongoose.Schema({
	name: String,
	species: String,
	birthday: Date,
	personality: String
});

var Villager = mongoose.model("Villager", villagerSchema);

function createNewVillager(){
	var villager = new Villager({
		name: "Kid Cat",
		species: "Cat",
		birthday: "08-01",
		personality: "Jork"
	});

	villager.save(function(err, villager){
		if(err){
			console.log("SOMETHING WENT WRONG!");
		}
		else{
			console.log(villager.name + " IS SAVED TO DATABASE!");
			console.log(villager);
		}
	});
}
//adding a new villager to the DB
Villager.create({
	name: "Ankha",
	species: "Cat",
	birthday: "09-22",
	personality: "Snooty"
}, function(err, villager){
	if(err){
		console.log("SOMETHING WENT WRONG!");
	}
	else{
		console.log(villager.name + " IS SAVED TO DATABASE!");
		console.log(villager);
	}
});

createNewVillager();

//retrive all villagers from the DB and console.log each one
Villager.find({}, function(err, villagers){
	if(err){
		console.log("ERROR: "+ err);
	}
	else{
		console.log("ALL THE VILLAGERS:")
		console.log(villagers);
	}
});