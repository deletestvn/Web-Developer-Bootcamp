var mongoose = require("mongoose");

var islandSchema = new mongoose.Schema({
	name: String,
	owner: String,
	zone: String
});

module.exports = mongoose.model("Island", islandSchema);