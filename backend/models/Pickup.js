const mongoose = require("mongoose");

// Define the Profile schema
const pickupSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "String",
    required: true,
  },
  address: {
    type: "String",
    required: true,
  },
  pincode: {
    type: "String",
    required: true,
  },
  landmark: {
    type: "String",
    required: true,
  },
  phoneno: {
    type: "String",
    required: true,
  },
  date: {
    type: "String",
    required: true,
  },
});

// Export the Profile model
module.exports = mongoose.model("Pickup", pickupSchema);
