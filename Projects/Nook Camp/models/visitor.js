var mongoose = require("mongoose");

var visitorSchema = new mongoose.Schema({
	name: String,
	island: String
});

module.exports = mongoose.model("Visitor", visitorSchema);