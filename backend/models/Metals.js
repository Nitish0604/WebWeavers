const mongoose = require("mongoose");

// Define the Profile schema
const metalSchema = new mongoose.Schema({
  gold: {
    type: Number,
    default: "4000",
  },
  silver: {
    type: Number,
    default: "4000",
  },
  copper: {
    type: Number,
    default: "4000",
  },
  others: {
    type: Number,
    default: "4000",
  },
});

// Export the Profile model
module.exports = mongoose.model("Metals", metalSchema);
