const mongoose = require("mongoose");

// Define the Profile schema
const facilitySchema = new mongoose.Schema({
  name: { 
    type: "String",
     required: true 
    },
    
});

// Export the Profile model
module.exports = mongoose.model("Facility", facilitySchema);
