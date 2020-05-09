var mongoose = require("mongoose");

var islandSchema = new mongoose.Schema({
	name: String,
	owner: String,
	zone: String,
	visitors: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Visitor"
		}
	]
});

module.exports = mongoose.model("Island", islandSchema);