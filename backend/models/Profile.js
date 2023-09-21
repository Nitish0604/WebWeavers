const mongoose = require("mongoose");

// Define the Profile schema
const profileSchema = new mongoose.Schema({
	gender: {
		type: String,
		default:"male"
	},
	dateOfBirth: {
		type: String,
		default:"hello"
		
	},
	contactNumber: {
		type: Number,
		default:"99787886868",
	},
});

// Export the Profile model
module.exports = mongoose.model("Profile", profileSchema);
