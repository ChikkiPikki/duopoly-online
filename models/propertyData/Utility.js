var mongoose = require("mongoose");



var Utility = new mongoose.Schema({
	name: String,
	price: Number,
	mortgageValue: Number,
	position: Number,
	ownedBy:{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "LivePlayer"

		},
		name: String
	},
	personOn:{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "LivePlayer"

		},
		name: String
	},
	rent: [Number],
	numberRolled: Number,
	otherUtilities: Boolean,	
});
module.exports = mongoose.model("Utility", Utility);