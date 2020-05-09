var mongoose = require("mongoose");
var Island = require("./models/island");
var Visitor   = require("./models/visitor");
 
var data = [
    {
        name: "New Heaven", 
        owner: "God",
        zone: "He is everywhere"
    },
    {
        name: "New Hell", 
        owner: "Lucifer",
        zone: "Just about time"
    },
    {
        name: "Cozy Dog Shit", 
        owner: "Pumpkin and Sapporo",
        zone: "EDT"
    }
]
 
function seedDB(){
   //Remove all islands
   Island.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed islands!");
        Visitor.deleteMany({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed visitors!");

             //add a few islands
            data.forEach(function(seed){
                Island.create(seed, function(err, island){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a island");

                        //create a visitor
                        Visitor.create(
                            {
                                name: "some idiot",
                                island: "his shit hole"
                            }, function(err, visitor){
                                if(err){
                                    console.log(err);
                                } else {
                                    island.visitors.push(visitor);
                                    island.save();
                                    console.log("Created new visitor");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;

// Villager.create(
//  {
//      name: "Katt", 
//      image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/27/Katt_NewLeaf.png?width=325"
//  }, function(err, villager){
//      if(err) console.log(err);
//      else console.log(villager);
// });

// SCHEMA SETUP
// var villagers = [ 
//      {name: "Ankha", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/51/Ankha.png?width=325"},
//      {name: "Bob", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/23/Bob_NewLeaf.png?width=325"},
//      {name: "Felicity", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/a/aa/Felicity.png?width=325"},
//      {name: "Kabuki", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/5/57/Kabuki.png?width=325"},
//      {name: "Katt", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/animal-crossing-new-horizons/2/27/Katt_NewLeaf.png?width=325"}
// ];